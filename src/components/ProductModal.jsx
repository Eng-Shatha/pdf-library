function ProductModal({ showForm, closeForm, editingProduct, formData, handleInputChange, handleSubmit }) {
  return (
    <>
    {showForm && (

                <div className="modal-overlay">
                    <div className="modal">
                        <h2>{editingProduct ? "Edit Product" : "Add Product"}</h2>

                        <form  onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label> Name</label>
                                <input type="text" name="name_Product" placeholder="Product Name" value={formData.name_Product} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label> Category</label>
                                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label> Price</label>
                                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label> Stock</label>
                                <input type="number" name="stock" placeholder="Stock" value={formData.stock} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label> Active</label>
                                <select name="active" value={formData.active} onChange={handleInputChange} required>
                                    <option value="">Select Status</option>
                                    <option value="true">Active</option>
                                    <option value="false">Out of stock</option>
                                </select>

                            </div>
                            <div className="form-buttons">
                                <button type="add" className="btn-add">{editingProduct ? "Update Product" : "Add Product"}</button>
                                <button type="button" className="btn-cancel" onClick={closeForm}>Cancel</button>
                            </div>
                        </form>
                    </div>

                </div>
            )}
    </>
  );
}
export default ProductModal;