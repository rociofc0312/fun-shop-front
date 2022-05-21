import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './styles.css'

const CartList = ({ cart }) => {
    const { removeItem, clear } = useContext(CartContext)

    return (
        <div className="cart-list">
            <div className="cart-header">
                <h2>Carrito de compras</h2>
                <div>
                    <small>{cart.length} producto(s)</small>
                    <div>
                        <button className="clean-cart" onClick={() => clear()}>Limpiar</button>
                    </div>
                </div>
            </div>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th style={{ width: '50%' }}>PRODUCTO</th>
                        <th style={{ width: '5%' }}></th>
                        <th style={{ width: '15%' }}>PRECIO</th>
                        <th style={{ width: '15%' }}>CANTIDAD</th>
                        <th style={{ width: '15%' }}>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((checkout) => (
                        <CartItem key={checkout.item.id} checkout={checkout} onRemove={removeItem} />
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default CartList
