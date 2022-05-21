import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CategoriesContext from '../../context/CategoriesContext'
import './styles.css'

const NavBarDropdown = ({ showOptions, isSideNav }) => {
    const { categories } = useContext(CategoriesContext)

    const showCategories = () => {
        let sections = []
        categories.forEach(category => {
            sections.push(CategoriesSection(category))
        });
        return sections
    }

    const CategoriesSection = (category) => {
        return (
            <section key={category.id} className={`category-menu ${isSideNav ? " sidenav-category" : " navbar-category"}`}>
                <h4>{category.name}</h4>
                <div className={`category-options ${isSideNav ? " sidenav-options" : " navbar-options"}`}>
                    {
                        category.subcategories.map((subcategory) => (
                            <NavLink key={subcategory.name} to={`/category/${subcategory.name}`} activeClassName="active-category" >{subcategory.name}</NavLink>
                        ))
                    }
                </div>
            </section>
        )
    }

    return (
        <div className={isSideNav ? `sidenav-menu${showOptions ? ' active-side' : ''}` : `navbar-menu${showOptions ? ' active-nav' : ''}`}>
            {showCategories()}
        </div>
    )
}

export default NavBarDropdown
