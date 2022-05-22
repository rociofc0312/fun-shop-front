import React from 'react'
import './styles.css'

const Order = ({ order }) => {

    const formatTimestamp = (firestoreTimestamp) => {
        let timestamp = firestoreTimestamp.seconds * 1000 + firestoreTimestamp.nanoseconds / 1000000;
        let orderDate = new Date(timestamp);
        let date = orderDate.getDate();
        let month = orderDate.getMonth() + 1;
        let year = orderDate.getFullYear();
        let fullDate = `${date}/${month}/${year}`;
        return fullDate;
    }

    return (
        <div className="order">
            <div className="order-header">
                <div>
                    <small><b>Id de orden:</b></small>
                    <p>{order.id}</p>
                </div>
                <div>
                    <small><b>Total:</b></small>
                    <p>{order.total}</p>
                </div>
            </div>
            <hr className="dashed" />
            <div>
                <div className="buyer-info">
                    <p><b>Nombre:</b> {order.buyer.name}</p>
                    <p><b>Teléfono:</b> {order.buyer.telephone}</p>
                    <p><b>Email:</b> {order.buyer.email}</p>
                    <p><b>Fecha de compra:</b> {formatTimestamp(order.date)}</p>
                </div>
                <table className="order-table">
                    <thead>
                        <tr>
                            <th style={{ width: '50%' }}>Producto</th>
                            <th style={{ width: '10%' }}>Cantidad</th>
                            <th style={{ width: '20%' }}>Precio</th>
                            <th style={{ width: '20%' }}>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.items.map((item) => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.quantity}</td>
                                <td>S/ {item.price.toFixed(2)}</td>
                                <td>S/ {item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Order
