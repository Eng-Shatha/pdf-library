import { productData } from "../data/data";
import { useState } from "react";
import ProductModal from "./ProductModal";

function ProductPage() {
    const [Products, setProducts] = useState(productData)
    // edit Data ex:praice
    const [formData, setFormData] = useState({
        name_Product: "",
        category: "",
        price: "",
        stock: "",
        active: "",

    })
    // hiding and show form 
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(editingProduct){
            setProducts(Products.map((item)=> item.id===editingProduct.id?{
                ...item,
                name_Product:formData.name_Product,
                category:formData.category,
                price:formData.price,
                stock:formData.stock,
                active:formData.stock>0,
            }:item))
        }else{
            const newProduct={
                ...formData,
                id:Products.length+1,
                name_Product:formData.name_Product,
                category:formData.category,
                price:formData.price,
                stock:formData.stock,
                active:formData.stock>0,

            }
            setProducts([...Products,newProduct])
        }
        closeForm();
    }
    const deleteProduct = (id) => {

        setProducts(Products.filter((p) => p.id !== id))
    }// fliter

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };
    const openAddForm = () => {
        setEditingProduct(null);
        setFormData({
            name_Product: "",
            category: "",
            price: "",
            stock: "",
            active: "",
        })
        setShowForm(true);
    }

    const openEditForm = (product) => {
        setEditingProduct(product.id);
        setFormData({
            name_Product: product.name_Product,
            category: product.category,
            price: product.price,
            stock: product.stock,
            active: product.active,
        })
        setShowForm(true);
    }

    const closeForm = () => {
        setShowForm(false);
        setEditingProduct(null);
        setFormData({
            name_Product: "",
            category: "",
            price: "",
            stock: "",
            active: "",
        })
    }


    return (
        // main page of product 
        <div>
            <ProductModal  showForm={showForm} closeForm={closeForm} editingProduct={editingProduct} formData={formData} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
            <div className="page-header">
                <h2 className="pr">ProductsPage</h2>
                <button className="btn-add" onClick={openAddForm}>Add Product</button>
            </div>
            <table className=" table">
                <thead>
                    <tr>

                        <th>name_Product</th>
                        <th>Category</th>
                        <th>price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Products.map((Product) => (
                        <tr key={Product.id}>
                            <td>{Product.name_Product}</td>
                            <td>{Product.category}</td>
                            <td>{Product.price}</td>
                            <td>{Product.stock}</td>
                            <td >
                                <span className={Product.active ? "badge active" : "badge inactive"}>{Product.active ? "Active" : "Out of stock"}</span>
                            </td>
                            <td>
                                <button className="btn-edit" onClick={() => openEditForm(Product)}>Edit</button>
                                <button className="btn-delete" onClick={() => deleteProduct(Product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default ProductPage;