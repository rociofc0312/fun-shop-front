import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'
import { timestamp } from '../../services/firebase'
import { createOrder } from '../../services/orders'
import Loading from '../shared/Loading/Loading'
import './styles.css'

const CheckoutForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { cart, clear, getCartTotal } = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)

    const sendOrder = (buyer, e) => {
        setLoading(true)
        createOrder(buildOrder(buyer))
            .then((result) => {
                setOrderId(result.id)
                clear()
                e.target.reset()
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const buildOrder = (buyer) => {
        let items = cart.map((checkout) => {
            return {
                id: checkout.item.id,
                title: checkout.item.name,
                quantity: checkout.quantity,
                price: checkout.item.price,
            }
        })

        return {
            buyer,
            items,
            date: timestamp(),
            total: getCartTotal()
        }
    }

    const SuccesfulPurchase = () => {
        return (
            <div className="successful-order">
                <p>Orden generada: {orderId}</p>
                <Link to="/orders" className="link-orders">Ver órdenes</Link>
                <Link to="/" className="continue">Seguir comprando</Link>
            </div>
        )
    }

    if(loading) return <Loading isSectionLoading={true}/>

    return (
        <div className="checkout-form">
            <h3>Enviar orden</h3>
            {
                orderId && !loading ?
                    <SuccesfulPurchase /> :
                    <form onSubmit={handleSubmit(sendOrder)}>
                        <label htmlFor="name">Nombre Completo</label>
                        <input type="text" {...register('name', { required: true })} placeholder="Nombre completo..." />
                        {
                            errors.name && errors.name.type === "required" && (<small className="error-message">El nombre es requerido</small>)
                        }
                        <label htmlFor="telephone">Teléfono</label>
                        <input type="text" id="telephone" {...register('telephone', { required: true, pattern: /(7|8|9)\d{8}/ })} placeholder="Teléfono..." maxLength="9" />
                        {
                            errors.telephone && errors.telephone.type === "required" && (<small className="error-message">El teléfono es requerido</small>)
                        }
                        {
                            errors.telephone && errors.telephone.type === "pattern" && (<small className="error-message">El teléfono no es válido</small>)
                        }
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" {...register('email', { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} placeholder="Email..." />
                        {
                            errors.email && errors.email.type === "required" && (<small className="error-message">El email es requerido</small>)
                        }
                        {
                            errors.email && errors.email.type === "pattern" && (<small className="error-message">El email no es válido</small>)
                        }
                        <input type="submit" value="Enviar" />
                    </form>
            }
        </div>
    )
}

export default CheckoutForm
