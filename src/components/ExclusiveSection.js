import React from 'react'
import { Link } from 'react-router-dom'

export default function ExclusiveSection() {
    return (
        <div className="exclusive-section">
            <div className="page-inner-content">
                <div className='content'>
                    <h2>Piercing Septo</h2>
                    <p>Lorem</p>
                    <Link to="/products" className='see-more-btn'>
                        <span> Ver agora</span>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                    <div className="right-side">
                        <img
                            src="/images/exclusive-image.png"
                            alt="A close up of a person wearing a septum piercing, with a calm and confident expression, set against a softly lit background. The image includes the text Piercing Septo and Ver agora, conveying a modern and inviting atmosphere."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
