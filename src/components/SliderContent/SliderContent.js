import React from 'react'
import './styles.css'

const SliderContent = ({ slides, currentIndex }) => {
    return (
        <div className="image-container">
            {
                slides.map((slide, index) =>
                    (
                        <img key={index} className={`slide-image ${index === currentIndex ? 'active' : ''}`}
                            src={slide.default} alt="slide"></img>
                    )
                )
            }
        </div>
    )
}

export default SliderContent
