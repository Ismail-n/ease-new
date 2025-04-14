import React from 'react'
import ease_logo from '../assets/images/ease-icon-new.svg'
import check_icon from '../assets/images/icon_check.svg'
import { NavLink } from 'react-router'
import '../assets/css/global.scss'




function Homepage() {
    return (
        <>
            <div className='row nav-row'>
                <NavbarComponent />
            </div>
            <div className="row">
                <div className="col-12 top-gredient position-absolute top-0"></div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center align-content-center position-relative plan-picker-top">
                    <div className="plan-picker-wrapper position-absolute">
                        <div className="plan-picker-story mb-4">
                            <h2 className='plan-heading'><b>Pick a plan</b></h2>
                            <p><b>that suits your business size</b></p>
                        </div>
                        <div className="plan-picking-container mt-4">
                            <div className="plan-type-wrapper d-flex justify-content-around">
                                <span>Monthly</span>
                                <span></span>
                                <span>Annually</span>
                            </div>
                            <div className="plan-saving-title mt-2">
                                <p><b>Save 20%<span> on annual plan</span></b> </p>
                            </div>
                            <div className="plan-card">
                                <div className="plan-amount text-center">
                                    <p><b>50 </b></p><span className='plan-currency'>SR</span> <span className='plan-duration'> / Pre month</span>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
const NavbarComponent = () => {
    return (
        <div className='col-12'>
            <div className="row links-wrapper">
                <div className="col-lg-6 d-flex justify-content-center align-items-center position-relative">
                    <div className="logo position-absolute">
                        <img src={ease_logo} alt="" srcset="" />
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center home-nav">
                    <div className="nav-links d-flex justify-content-around w-50">
                        <NavLink>Contact</NavLink>
                        <NavLink>Plans</NavLink>
                        <NavLink className="link-user">User</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Homepage
