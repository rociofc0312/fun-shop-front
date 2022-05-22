import { fireStore } from './firebase'
import { updateBatchStocks } from './products'

export const createOrder = ( order ) => {
    return fireStore
        .collection('orders')
        .add(order)
        .then(( result ) => {
            updateBatchStocks(order.items)
            return result
        })
}

export const getOrders = () => {
    return fireStore
    .collection('orders')
    .orderBy('date', 'desc')
    .get()
    .then(({ docs }) => {
        return docs.map((doc) => {
            const data = doc.data()
            const id = doc.id
            return {id, ...data}
        })
    })
}