import cart from '../../assets/shopping-cart.png'
import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import './styles.css'
import { Link } from 'react-router-dom'

const CartSummary = ({ onPayCart }) => {
    const { getCartTotal } = useContext(CartContext)

    return (
        <div className="cart-summary">
            <div className="summary-header">
                <img src={cart} alt="cart-pic" />
                <p>Resumen de compra</p>
            </div>
            <div>
                <div className="cart-totals">
                    <p>Subtotal</p>
                    <p>S/ {getCartTotal()}</p>
                </div>
                <div className="cart-totals cart-total">
                    <p>Total</p>
                    <p>S/ {getCartTotal()}</p>
                </div>
            </div>
            <div className="cart-actions">
                <button onClick={() => onPayCart()} className="pay">Pagar</button>
                <Link to="/" className="continue">Seguir comprando</Link>
            </div>
        </div>
    )
}

export default CartSummary
