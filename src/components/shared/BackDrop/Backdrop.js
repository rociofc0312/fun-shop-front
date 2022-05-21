import React from 'react'
import './styles.css'

const Backdrop = ({ onClickedBack }) => {
    return (
        <div className="backdrop" onClick={() => onClickedBack()}/>
    )
}

export default Backdrop
