import React, { useState, createContext } from 'react'

const CategoriesContext = createContext()

export function CategoriesContextProvider ({ children }) {
    const [categories, setCategories] = useState([])

    return <CategoriesContext.Provider value={{ categories, setCategories }}>
        { children }
    </CategoriesContext.Provider>
}

export default CategoriesContext
