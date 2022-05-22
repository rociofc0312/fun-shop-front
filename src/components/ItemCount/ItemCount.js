import React, { useState } from 'react';
import './styles.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial)

    const resetCount = () => {
        onAdd(count)
        setCount(initial)
    }

    return (
        <div className="count">
            <div className="item-count">
                <p>Stock: {stock}</p>
                {stock
                    ?
                    <div className="counter">
                        <button className="update-count" onClick={() => setCount(count < stock ? count + 1 : count)}>+</button>
                        <p>{count}</p>
                        <button className="update-count" onClick={() => setCount(count > initial ? count - 1 : count)}>−</button>
                    </div>
                    :
                    <p>No hay stock disponible</p>
                }
                <button disabled={!stock} onClick={() => resetCount()} className={`add-cart${stock ? '' : ' disabled'}`}>Agregar a carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;