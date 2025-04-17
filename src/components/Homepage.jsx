import React from 'react'
import ease_logo from '../assets/images/ease-icon-new.svg'
import check_icon from '../assets/images/icon_check.svg'
import image_tile from '../assets/images/image_tile.svg'
import icon_whatsapp from '../assets/images/icon_whatsapp.svg'
import icon_instagram from '../assets/images/icon_instagram.svg'
import icon_twitter from '../assets/images/icon_twitter.svg'
import icon_user from '../assets/images/user_icon.svg'
import { NavLink } from 'react-router'
import '../assets/css/global.scss'
import '../assets/css/responsive.scss'
import { Button, Switch } from '@mui/material'





function Homepage() {
    return (
        <>
            <div className='row nav-row '>
                <NavbarComponent />
            </div>
            <div className="row ">
                <div className="gredient"></div>
                <div className="col-12 d-flex justify-content-center align-content-center mt-5 plan-picker-top">
                    <div className="plan-picker-wrapper ">
                        <div className="plan-picker-story mb-4">
                            <h2 className='plan-heading'><b>Pick a plan</b></h2>
                            <p><b>that suits your business size</b></p>
                        </div>
                        <div className="plan-picking-container mt-4">
                            <div className="plan-type-wrapper d-flex justify-content-around align-items-baseline">
                                <span className='align-self-center'>Monthly</span>
                                <Switch className='p-0 switch_icon' />
                                <span className='align-self-center'>Annually</span>
                            </div>
                            <div className="plan-saving-title text-center mt-2">
                                <p><b>Save 20%<span> on annual plan</span></b> </p>
                            </div>
                            <div className="plan-card p-5">
                                <div className="price-container">
                                    <span className="price">50</span>
                                    <span className="currency">SR</span>
                                    <span className="per-month">/ Pre month</span>
                                </div>
                                <div className="screen-counter d-flex ms-4 mt-4">
                                    <div className="check-icon">
                                        <img src={check_icon} alt="" srcset="" />
                                    </div>
                                    <div className="screens-counts ms-4 d-flex">
                                        <span className="feature-title">Screen</span>
                                        <span className="feature-sub">per month</span>
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
                    <div className="popularity-wrapper d-flex justify-content-center mt-5">
                        <p className='text-ease fw-bold'>Trusted by 5500+ customers globally</p>
                        <p className='fw-bold'>Powering 100,000+ screens across 30+ countries</p>
                    </div>
                </div>
            </div>

            <div className="row ">
                <div className="col-lg-12 col-md-12">
                    <div className="advertisement-top">
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

            <Promotioncard />
            <div className="row">
                <div className="col-lg-12 p-0">
                    <div className="footer-contents-wrapper mt-5 justify-content-around m-auto d-lg-flex d-md-block ">
                        <div className="content-left">
                            <img src={ease_logo} alt="" />
                            <div className="footer-story mt-4">
                                <p>System security aligned with your enterprise standards</p>
                                <p>We take the safety & confidentiality of your business seriously.</p>
                                <p>Pickcel is one of the top-tier</p>
                            </div>
                        </div>
                        <div className="content-right align-self-end pb-lg-5 pb-md-5">
                            <div className="social-icons">
                                <img src={icon_whatsapp} alt="" />
                                <img src={icon_instagram} alt="" />
                                <img src={icon_twitter} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="rights d-flex justify-content-around p-3">
                        <h3 className='pe-5'>© 2024-2025 All Rights Reserved.</h3>
                        <h3 className='ps-5'><NavLink>Terms of service.</NavLink></h3>
                    </div>

                </div>
            </div>


        </>
    )
}
const NavbarComponent = () => {
    return (
        <div className='col-12'>
            <div className="row links-wrapper mt-3">
                <div className="col-lg-6 d-flex justify-content-center align-items-center ">
                    <div className="logo ">
                        <img src={ease_logo} alt="" srcset="" />
                    </div>
                </div>
                <div className="col-lg-6 d-flex justify-content-center align-items-center home-nav">
                    <div className="nav-links  d-flex justify-content-around w-50">
                        <NavLink>Contact</NavLink>
                        <NavLink>Plans</NavLink>
                        <NavLink className="link-user bg-light px-lg-3"><img src={icon_user} alt="" srcset="" /> User</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
};
const Promotioncard = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="bottom-card-wrapper d-flex  justify-content-center mt-5 px-lg-4 px-sm-5 py-sm-5 py-lg-3">
                    <div className="bottom-card-contents d-flex flex-column px-4 py-3">
                        <div className="card-title-top px-4 py-3">
                            <h2 className='title-1'><b>Design Like a Pro,</b></h2>
                            <h2 className='title-2'><b>Manage Like a Boss</b></h2>
                        </div>
                        <div className="card-titles-bottom d-lg-flex d-sm-block d-md-flex px-4 py-3 mt-lg-3">
                            <div className="card-bottom-left">
                                <h6>Enjoy complete control over your industrial </h6>
                                <h6>screens with ease</h6>
                            </div>
                            <div className="card-bottom-right">
                                <button>Contact us</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage
