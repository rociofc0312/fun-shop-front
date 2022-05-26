import React, { useState, useContext } from 'react'
import CartList from '../../components/CartList/CartList'
import CartContext from '../../context/CartContext'
import CartSummary from '../../components/CartSummary/CartSummary'
import empty from '../../assets/empty.png'
import { Link } from 'react-router-dom'
import CheckoutContainer from '../CheckoutContainer/CheckoutContainer'
import { useAuth } from "../../context/AuthContext";
import './styles.css'

const CartContainer = () => {
    const { cart } = useContext(CartContext)
    const [showCheckout, setShowCheckout] = useState(false)
    const { user, userFromDb, setUserFromDb } = useAuth();

    const showCheckoutModal = () => {
        if(!user) {
            alert('Debe iniciar sesión.')
        } else {
            setShowCheckout(!showCheckout)
        }
    }

    const hideCheckoutModal = () => {
        setShowCheckout(false)
    }

    const CartCheckout = () => {
        return (
            <div className="cart-checkout">
                <CartList cart={cart} />
                <CartSummary onPayCart={ showCheckoutModal }/>
            </div>
        )
    }

    const EmptyCart = () => {
        return (
            <div className="empty-cart">
                <img src={empty} alt="empty-cart" />
                <p>Tu carrito se encuentra vacío.</p>
                <Link className="back-main" to="/">Seguir comprando</Link>
            </div>
        )
    }

    return (
        <div className="cart-container">
            { cart.length ? <CartCheckout /> : <EmptyCart /> }
            { showCheckout && <CheckoutContainer  onClickedBack={ hideCheckoutModal }/> }
        </div>
    )
}

export default CartContainer
