import React, { useState } from 'react'
import Backdrop from '../../components/shared/BackDrop/Backdrop'
import NavBar from '../../components/Navbar/Navbar'
import SideNav from '../../components/SideNav/SideNav'

const NavContainer = () => {
    const [showSideNav, setShowSideNav] = useState(false)

    const showSideNavMenu = () => {
        setShowSideNav(!showSideNav)
    }

    const hideSideNavMenu = () => {
        setShowSideNav(false)
    }

    return (
        <div>
            <NavBar onClickedMenu={showSideNavMenu} />
            <SideNav show={showSideNav} onClickedBack={hideSideNavMenu} />
            { showSideNav && <Backdrop onClickedBack={hideSideNavMenu} />}
        </div>
    )
}

export default NavContainer
