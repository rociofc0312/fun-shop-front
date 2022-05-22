import React from 'react'
import './styles.css'

const SliderDots = ({ currentIndex, slides, onNext }) => {
    return (
        <div className="all-dots">
            {
                slides.map((slide, index) =>
                    (
                        <span key={index} className={`dot${currentIndex === index ? ' active-dot' : ''}`}
                            onClick={(event) => { onNext(event.target.value = index) }}/>
                    )
                )
            }
        </div>
    )
}

export default SliderDots
