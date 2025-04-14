import React, { useState } from 'react'
import ease_logo from '../assets/images/ease-icon-new.svg'
import '../assets/css/global.scss'
import { InputSwitch } from 'primereact/inputswitch';



function Payment() {
    const [annualBilling, setannualBilling] = useState(false);
    return (
        <div className="row">
            <div className="col-lg-6 position-relative vh-100 subscription-wrapper">
                <div className="subscription-info-wrapper position-relative">
                    <div className="ease-logo ">
                        <img src={ease_logo} alt="" />
                    </div>
                    <div className="subscription-form position-absolute">
                        <div class="price-box">
                            <h4>Subscribe to Monthly</h4>
                            <span class="price">50<span class="currency">SR</span></span>
                            <span class="per">/ Pre month</span>
                        </div>
                        <div class="pricing-card">
                            <div class="pricing-header">
                                <span class="title">Monthly</span>
                                <span class="price">50SR</span>
                            </div>
                            <div className="pricing-detail">
                                <span>Monthly 50rs Screen per month plan</span>
                            </div>
                            <div className="pricing-card-footer">
                                <div className="anual-plan-toggle"></div>
                                <div className="annual-plan-saving-price">
                                    <p>
                                        <span className='save-price'>Save $30</span>
                                        <span className='saving-plan'>with annual billing</span>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="sub-total-amount d-flex justify-content-between p-4 pb-0">
                            <span class="title fw-bolder">Subtotal</span>
                            <span class="price fw-bolder">50SR</span>
                        </div>
                        <div className="promotion-code p-4 pt-1">
                            <input type="text" name="" className='form-control' placeholder='Add promotion code' id="" />
                        </div>
                        <div className="total-amount p-4 d-flex justify-content-between">
                            <span class="title fw-bolder">Total due</span>
                            <span class="price fw-bolder">50SR</span>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 vh-100"></div>
        </div>

    )
}

export default Payment
