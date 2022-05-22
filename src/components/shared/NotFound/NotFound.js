import React from 'react'
import sad from '../../../assets/sad.png'
import './styles.css'

const NotFound = ({ message }) => {
    return (
        <div className="not-found">
            <img src={sad} alt="not-found" />
            <p>{message}</p>
        </div>
    )
}

export default NotFound
