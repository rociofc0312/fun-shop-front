import React, { createContext, useState } from 'react';

const CartContext = createContext()

export function CartContextProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart([...cart, { item, quantity }])
        } else {
            let foundCheckout = cart.find(checkout => checkout.item.id === item.id)
            let updatedCart = cart.filter((checkout) => checkout.item.id !== item.id )
            setCart([...updatedCart, {item:foundCheckout.item, quantity: foundCheckout.quantity + quantity}])
        }
    }

    const removeItem = (id) => {
        setCart(cart.filter(checkout => checkout.item.id !== id))
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.find(checkout => checkout.item.id === id) ? true : false
    }

    const getItemQuantity = (id) => {
        return cart.find(checkout => checkout.item.id === id).quantity
    }

    const getCartQuantity = () => {
        return cart.reduce((previous,current) => previous + current.quantity, 0)
    }

    const getCartTotal = () => {
        return cart.reduce((previous,current) => previous + (current.quantity * current.item.price), 0).toFixed(2)
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clear, getItemQuantity, getCartQuantity, getCartTotal }}>
        { children }
    </CartContext.Provider>
}

export default CartContext