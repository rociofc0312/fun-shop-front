import { fireStore } from './firebase'

export const createUserDB = ( user ) => {
    return fireStore
        .collection('users')
        .doc(user.uid)
        .set({
            email: user.email
        })
        .then(( result ) => {
            return result
        })
}

export const getUser = (uid) => {
    return fireStore
        .collection('users')
        .doc(uid)
        .get()
        .then((doc) => {
            return doc.exists ? { ...doc.data(), uid } : null
        })
}

export const updateUser = (uid, extraData) => {
    return fireStore
        .collection('users')
        .doc(uid)
        .update(extraData)
}