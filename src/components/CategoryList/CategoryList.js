import React from 'react'
import Category from '../Category/Category'
import './styles.css'

const CategoryList = ({ list }) => {
    return (
        <div>
            <div className="category-title">
                <small>¿Buscando algo específico?</small>
                <h3>CATEGORÍAS DISPONIBLES</h3>
            </div>
            <div className="category-list">
                {
                    list.map((category) => (
                        <Category key={category.name} category={category} />
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryList
