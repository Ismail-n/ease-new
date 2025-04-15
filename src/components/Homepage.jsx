import React from 'react'
import ease_logo from '../assets/images/ease-icon-new.svg'
import check_icon from '../assets/images/icon_check.svg'
import image_tile from '../assets/images/image_tile.svg'
import video_tile from '../assets/images/video_tile.svg'
import { NavLink } from 'react-router'
import '../assets/css/global.scss'




function Homepage() {
    return (
        <>
            <div className='row nav-row position-relative'>
                <NavbarComponent />
            </div>

            <div className="row ">
                <div className="gredient"></div>
                <div className="col-12 d-flex justify-content-center align-content-center position-relative plan-picker-top">
                    <div className="plan-picker-wrapper position-relative">
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
                            <div className="plan-saving-title text-center mt-2">
                                <p><b>Save 20%<span> on annual plan</span></b> </p>
                            </div>
                            <div className="plan-card p-5">
                                <div class="price-container">
                                    <span class="price">50</span>
                                    <span class="currency">SR</span>
                                    <span class="per-month">/ Pre month</span>
                                </div>
                                <div className="screen-counter d-flex ms-4 mt-4">
                                    <div className="check-icon">
                                        <img src={check_icon} alt="" srcset="" />
                                    </div>
                                    <div className="screens-counts ms-4 d-flex">
                                        <span class="feature-title">Screen</span>
                                        <span class="feature-sub">per month</span>
                                    </div>
                                </div>
                                <div className="plan-picker-btn mt-4 text-center">
                                    <button className='next-btn'>choose plan</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="row ">
                <div className="col-12">
                    <div className="popularity-wrapper d-flex justify-content-center position-relative mt-5">
                        <p className='text-ease fw-bold'>Trusted by 5500+ customers globally</p>
                        <p className='fw-bold'>Powering 100,000+ screens across 30+ countries</p>
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <div className="advertisement-top  position-relative ">
                        <div className="tile-images d-flex justify-content-center mt-5">
                            <img src={image_tile} alt="" className='m-2' srcset="" />
                            <img src={image_tile} alt="" className='m-2' srcset="" />
                            <img src={image_tile} alt="" className='m-2' srcset="" />
                        </div>
                        <div className="platform_introduction d-flex justify-content-center m-auto mt-5 px-4 py-3">
                            <div className="platform-into-video"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="bottom-card-wrapper d-flex position-relative m-auto mt-5 px-4 py-3">
                        <div className="bottom-card-contents d-flex px-4 py-3">
                            <div className="card-titles px-4 py-4">
                                <p>Design Like a Pro,</p>
                                <p>Manage Like a Boss</p>
                                <p>Enjoy complete control over your industrial <br /> screens with ease.</p>
                            </div>
                            <div className="card-button">
                                <div className="next-button">Contact Us</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="footer-contents-wrapper">

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
                    <div className="logo position-relative">
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
