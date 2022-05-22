import firebase from 'firebase/app'
import { fireStore } from './firebase'

export const getProducts = (subcategory) => {
    return fireStore
        .collection('products')
        .where('subcategory', '==', subcategory)
        .get()
        .then(({ docs }) => {
            return docs.map((doc) => {
                const data = doc.data()
                const id = doc.id
                return { id, ...data }
            })
        })
}

export const getProductDetail = (id) => {
    return fireStore
        .collection('products')
        .doc(id)
        .get()
        .then((doc) => {
            return doc.exists ? { ...doc.data(), id } : null
        })
}

export const updateBatchStocks = ( items ) => {
    const batch = fireStore.batch();
    const itemsRef = fireStore.collection("products")

    items.forEach(( item ) => {
            const itemDocRef = itemsRef.doc(item.id)
            batch.update(itemDocRef, { stock: firebase.firestore.FieldValue.increment(-item.quantity) })
        }
    )
    batch.commit()
}