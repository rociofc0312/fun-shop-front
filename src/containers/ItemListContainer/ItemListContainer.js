import React, { useEffect, useState } from 'react'
import ItemList from '../../components/ItemList/ItemList'
import styles from './styles.module.css'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../services/products'
import { useIsMountedRef } from '../../hooks/useIsMountedRef'
import Loading from '../../components/shared/Loading/Loading'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { isMountedRef } = useIsMountedRef()
    let { id } = useParams()

    useEffect(() => {
        getProducts(id)
            .then((result) => {
                if (isMountedRef.current) setItems(result)
            })
            .finally(() => {
                if (isMountedRef.current) setLoading(false)
            })
    }, [id, isMountedRef])

    return (
        <div className={styles.greeting}>
            { loading ? <Loading isSectionLoading={true} /> : <ItemList items={items} /> }
        </div>
    )
}

export default ItemListContainer;