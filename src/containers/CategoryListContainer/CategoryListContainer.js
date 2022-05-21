import React, { useContext }  from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'
import SliderContainer from '../SliderContainer/SliderContainer'
import CategoriesContext from '../../context/CategoriesContext'
import './styles.css'

const CategoryListContainer = () => {
    const { categories } = useContext(CategoriesContext)

    const getCategoriesList = () => {
        let flattenCategories = categories.map(category => category.subcategories).flat()
        return flattenCategories
    }

    return (
        <div className="category-container">
            <SliderContainer/>
            <CategoryList list={getCategoriesList()}/>
        </div>
    )
}

export default CategoryListContainer
