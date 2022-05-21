import React from 'react'
import Backdrop from '../../components/shared/BackDrop/Backdrop'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'

const CheckoutContainer = ({ onClickedBack }) => {
    return (
        <div>
            <CheckoutForm />
            <Backdrop onClickedBack={ onClickedBack } />
        </div>
    )
}

export default CheckoutContainer
