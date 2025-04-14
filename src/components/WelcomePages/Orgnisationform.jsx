import React from 'react'
import '../../assets/css/global.scss'
import auth_button_arrow from '../../assets/images/auth-button-arrow.svg'



function Orgnisationform() {
    return (
        <div className='row'>
            <div className="col-lg-12 orgnisation-form-wrapper vh-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="orgnisation-form-container position-relative">
                        <div className="orgnisation-form position-absolute">
                            <div className="orgnisation-form-heading">
                                <h3>Your organization info</h3>
                            </div>
                            <div className="orgnisation-form-inputs">
                                <div className="form-group mt-3">
                                    <input type="text" className='form-control' name="" id="" placeholder='Orgnisation name' />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className='form-control' name="" id="" placeholder='Commercial number' />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className='form-control' name="" id="" placeholder='VAT number' />
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className='form-control' name="" id="" placeholder='Phone number' />
                                </div>
                                <div className="mt-4 text-center">
                                    <button className='next-btn'>Next <img className='ps-1' src={auth_button_arrow} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orgnisationform
