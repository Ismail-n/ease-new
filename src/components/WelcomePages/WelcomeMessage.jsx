import React from 'react'
import '../../assets/css/global.scss'
import auth_button_arrow from '../../assets/images/auth-button-arrow.svg'



function WelcomeMessage() {
    return (
        <div className='row'>
            <div className="col-lg-12 position-relative welcome-message-wrapper vh-100 d-flex justify-content-center align-items-end">
                <div className="welcome-message position-absolute ">
                    <h1 className='welcome-message-heading'>Welcome to ease</h1>
                    <span className='welcome-message-title'>Simple and powerful way to manage <br /> and publish content on your displays. </span>
                    <div className="next-button d-flex justify-content-center align-items-center mt-3">
                        <button className='btn next-btn'>
                            Next <img className='ps-1' src={auth_button_arrow} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WelcomeMessage
