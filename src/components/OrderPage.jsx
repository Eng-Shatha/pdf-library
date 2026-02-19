import { OrderData } from "../data/data";
import { useState } from "react";
function OrderPage() {
    const [Orders, setOrders] = useState(OrderData)
    const deleteOrder=(id)=>{
setOrders(Orders.filter((o)=>o.id !==id))
    }// filter
    return (
        <div>
            <div className="page-header">
                <h2 className="or">OrdersPage</h2>
                <button className="btn-add">Add Order</button>
            </div>
            <table className=" table">
                <thead>
                    <tr>
                        
                        <th>ID</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Orders.map((Order) => (
                        <tr key={Order.id}>
                            <td>{Order.id}</td>
                            <td>{Order.product_id}</td>
                            <td>{Order.quantity}</td>
                            <td >
                                <span className={Order.active ? "badge active" : "badge inactive"}>{Order.active ? "Active" : "Inactive"}</span>
                            </td>
                            <td>
                                <button className="btn-edit">Edit</button>
                                <button className="btn-delete"onClick={()=>deleteOrder(Order.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default OrderPage;
