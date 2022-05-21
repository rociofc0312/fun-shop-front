import React from 'react';
import CartWidget from '../CartWidget/CartWidget'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import './styles.css'
import NavBarDropdown from '../NavBarDropdown/NavBarDropdown'
import { Link } from 'react-router-dom'
import order from '../../assets/order.png'

const NavBar = ({ onClickedMenu }) => {
    const [showOptions, setShowOptions] = React.useState(false)

    return (
        <div className="navbar">
            <div className="navbar-items">
                <Link to="/">
                    <div className="logo-item">
                        <img id="logo" src={logo} alt="logo"></img>
                    </div>
                </Link>
                <div id="menu-options" className="grow">
                    <Link to="/" className="home">
                        <p className="options">Home</p>
                    </Link>
                    <div onMouseEnter={() => setShowOptions(true)} onMouseLeave={() => setShowOptions(false)}>
                        <p className="options">Categorías</p>
                        <NavBarDropdown showOptions={showOptions} isSideNav={false} />
                    </div>
                </div>
                <div className="menu-actions">
                    <Link className="order-item" to="/orders">
                        <img id="order-img" src={order} alt="order" />
                    </Link>
                    <CartWidget />
                    <div id="menu" onClick={() => onClickedMenu()}>
                        <img src={menu} alt="menu"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;