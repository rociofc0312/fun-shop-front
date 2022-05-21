import React, { useEffect, useState } from 'react'
import OrderList from '../../components/OrderList/OrderList'
import Loading from '../../components/shared/Loading/Loading'
import { useIsMountedRef } from '../../hooks/useIsMountedRef'
import { getOrders } from '../../services/orders'
import './styles.css'

const OrderContainer = () => {
    const { isMountedRef } = useIsMountedRef()
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getOrders()
            .then((result) => {
                if (isMountedRef.current) setOrders(result)
            })
            .finally(() => {
                if (isMountedRef.current) setLoading(false)
            })
    }, [isMountedRef])


    if(loading) return <Loading isSectionLoading={true}/>

    return (
        <div className="order-container">
            <h2>Mis órdenes</h2>
            <OrderList orders={orders} />
        </div>
    )
}

export default OrderContainer
