import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import './styles.css'

const DetailModal = ({ handleClose, show, id }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {show && <ItemDetailContainer id={id}/>}
                <button className="modal-close" type="button" onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}

export default DetailModal
