import React from 'react'
import Order from '../Order/Order'
import './styles.css'

const OrderList = ({ orders }) => {
    return (
        <div className="order-list">
            { orders.map((order) => <Order key={order.id} order={order} />) }
        </div>
    )
}

export default OrderList
