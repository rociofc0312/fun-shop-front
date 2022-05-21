import React from 'react'
import './styles.css'

const CartItem = ({ checkout, onRemove }) => {
    return (
        <tr className="cart-item">
            <td>
                <div className="item-cell">
                    <img src={checkout.item.url} alt="item-pic"/>
                    <p>{checkout.item.name}</p>
                </div>
            </td>
            <td><div className="remove-item" onClick={() => onRemove(checkout.item.id)}></div></td>
            <td>S/ {checkout.item.price.toFixed(2)}</td>
            <td>{checkout.quantity}</td>
            <td>S/ {checkout.quantity * checkout.item.price}</td>
        </tr>
    )
}

export default CartItem
