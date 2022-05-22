import React from 'react'
import { Link } from 'react-router-dom'
import NavBarDropdown from '../NavBarDropdown/NavBarDropdown'
import './styles.css'

const SideNav = ({ show, onClickedBack }) => {
    const [showOptions, setShowOptions] = React.useState(false)
    
    return (
        <nav className={`sidenav${show ? ' open' : ''}`}>
            <button className="side-close" onClick={() => onClickedBack()}>✕</button>
            <div>
                <Link className="side-options" to="/">Home</Link>
                <div className="dropdown-content">
                    <p className="side-options" href="#" onClick={() => setShowOptions(!showOptions)}>Categorías <small>▼</small></p>
                    <NavBarDropdown showOptions={showOptions} isSideNav={true} />
                </div>
            </div>
        </nav>
    )
}

export default SideNav
