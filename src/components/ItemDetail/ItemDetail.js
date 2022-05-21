import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import CartContext from '../../context/CartContext'
import { GlassMagnifier } from "react-image-magnifiers"
import { Link } from 'react-router-dom'
import NotFound from '../shared/NotFound/NotFound'
import './styles.css'

const ItemDetail = ({ item }) => {
    let notFoundMessage = "¡Lo sentimos! No se encontró el producto"
    const { addItem, isInCart, getItemQuantity } = useContext(CartContext)
    const [stock, setStock] = useState(() => {
        return item ? (isInCart(item.id) ? item.stock - getItemQuantity(item.id) : item.stock) : 0
    })
    const [showCart, setShowCart] = useState(false)

    const decreaseStock = (quantitySelected) => {
        if (quantitySelected <= stock) {
            addItem(item, quantitySelected)
            setStock(stock - quantitySelected)
            setShowCart(true)
        } else {
            alert('La cantidad elegida supera el stock disponible')
        }
    }

    return (
        <div className="detail-container">
            {
                item ?
                    <div className="detail-content">
                        <div className="image-detail">
                            <GlassMagnifier className="image-item" imageSrc={item.url} imageAlt={item.name} magnifierBorderSize={1} square={true} />
                        </div>
                        <div className="description-detail">
                            <h2>{item.name}</h2>
                            <p>Precio: S/ {item.price}</p>
                            <hr />
                            <br />
                            <p>{item.description}</p>
                            <ItemCount stock={stock} initial={1} onAdd={decreaseStock} />
                            {
                                showCart &&
                                <div>
                                    <p>Producto agregado a carrito.</p>
                                    <Link className="go-cart" to="/cart">Terminar mi compra</Link>
                                </div>
                            }
                        </div>
                    </div>
                    :
                    <NotFound message={notFoundMessage} />
            }
        </div>
    )
}

export default ItemDetail
