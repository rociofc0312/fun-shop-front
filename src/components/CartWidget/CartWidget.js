import './styles.css'
import cart from '../../assets/shopping-cart.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';

const CartWidget = () => {
    const { getCartQuantity } = useContext(CartContext)
    return (
        <Link to="/cart" id="shopping-cart-item">
            <small className="cart-quantity">{getCartQuantity()}</small>
            <img id="shopping-cart" src={cart} alt="shopping-cart"></img>
        </Link>
    )
}

export default CartWidget;