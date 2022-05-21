import React, { useState, useEffect } from 'react'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../../services/products'
import { useIsMountedRef } from '../../hooks/useIsMountedRef'
import Loading from '../../components/shared/Loading/Loading'
import './styles.css'

const ItemDetailContainer = () => {
    let { id } = useParams()
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const { isMountedRef } = useIsMountedRef()

    useEffect(() => {
        getProductDetail(id)
            .then((result) => {
                if (isMountedRef.current) setItem(result)
            })
            .finally(() => {
                if (isMountedRef.current) setLoading(false)
            })
    }, [id, isMountedRef])

    return (
        <div>
            { loading ? <Loading isSectionLoading={true} /> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer
