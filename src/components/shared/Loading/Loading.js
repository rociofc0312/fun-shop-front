import React from 'react'
import icon from '../../../assets/icon.png'
import Loader from 'react-loader-spinner'
import './styles.css'

const Loading = ({ isSectionLoading }) => {
    const LoadingPage = () => {
        return (
            <div className="loading">
                <img className="icon" src={icon} alt="icon" />
                <p>¡Encuentra los mejores productos!</p>
                <Loader className="detail"
                    type="MutatingDots"
                    color="#8e96f5"
                    secondaryColor="#f9c847" />
            </div>
        )
    }

    const LoadingSection = () => {
        return (
            <Loader className="loading-dots"
                type="ThreeDots"
                color="#f9c847"
                width={50}
                height={50}/>
        )
    }
    return (
        <div> { isSectionLoading ? <LoadingSection/> : <LoadingPage /> } </div>
    )
}

export default Loading
