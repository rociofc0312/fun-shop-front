import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Category = ({ category }) => {
    return (
        <div className="category">
            <Link to={`/category/${category.name}`}>
                <div className="category-block">
                    <img src={category.url} alt="categoría" />
                    <span>{category.name}</span>
                </div>
            </Link>
        </div>
    )
}

export default Category
