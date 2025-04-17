import React, { useState } from 'react'
import '../../assets/css/global.scss'
import auth_button_arrow from '../../assets/images/auth-button-arrow.svg'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function Orgnisationform() {

    // Login validations shema using Yup

    const OrgnisationRegistrationFormSchema = Yup.object({
        org_name: Yup.string()
            .min(3, 'Organisation name must be at least 3 characters')
            .max(50, 'Organisation name must be at most 50 characters')
            .required('Organisation name is required'),

        commr_num: Yup.string()
            .min(8, 'Commercial number must be at least 8 characters')
            .max(15, 'Commercial number must be at most 15 characters')
            .required('Commercial number is required'),

        vat_number: Yup.string()
            .min(8, 'VAT number must be at least 8 characters')
            .max(15, 'VAT number must be at most 15 characters')
            .required('VAT number is required'),

        phone_number: Yup.string()
            .matches(/^[0-9]+$/, 'Phone number must contain only digits')
            .min(8, 'Phone number must be at least 8 digits')
            .max(15, 'Phone number must be at most 15 digits')
            .required('Phone number is required'),
    });

    return (
        <div className='row'>
            <div className="col-lg-12 orgnisation-form-wrapper vh-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="orgnisation-form-container position-relative">
                        <div className="orgnisation-form position-absolute">
                            <div className="orgnisation-form-heading">
                                <h3>Your organization info</h3>
                            </div>
                            <Formik
                                initialValues={{
                                    org_name: "",
                                    commr_num: "",
                                    vat_number: "",
                                    phone_number: ""
                                }}
                                validationSchema={OrgnisationRegistrationFormSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(() => {
                                        console.log(values)
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({ isSubmitting, errors, touched }) => (
                                    <Form>
                                        <div className="orgnisation-form-inputs">

                                            {/* Org Name */}
                                            <div className="form-group mt-3">
                                                <Field
                                                    type="text"
                                                    name="org_name"
                                                    placeholder="Organisation name"
                                                    className={`form-control ${touched.org_name && errors.org_name ? 'is-invalid' : ''}`}
                                                />
                                                <ErrorMessage
                                                    name="org_name"
                                                    component="span"
                                                    className="error-message"
                                                />
                                            </div>

                                            {/* Commercial Number */}
                                            <div className="form-group mt-3">
                                                <Field
                                                    type="text"
                                                    name="commr_num"
                                                    placeholder="Commercial number"
                                                    className={`form-control ${touched.commr_num && errors.commr_num ? 'is-invalid' : ''}`}
                                                />
                                                <ErrorMessage
                                                    name="commr_num"
                                                    component="span"
                                                    className="error-message"
                                                />
                                            </div>

                                            {/* VAT Number */}
                                            <div className="form-group mt-3">
                                                <Field
                                                    type="text"
                                                    name="vat_number"
                                                    placeholder="VAT number"
                                                    className={`form-control ${touched.vat_number && errors.vat_number ? 'is-invalid' : ''}`}
                                                />
                                                <ErrorMessage
                                                    name="vat_number"
                                                    component="span"
                                                    className="error-message"
                                                />
                                            </div>

                                            {/* Phone Number */}
                                            <div className="form-group mt-3">
                                                <Field
                                                    type="text"
                                                    name="phone_number"
                                                    placeholder="Phone number"
                                                    className={`form-control ${touched.phone_number && errors.phone_number ? 'is-invalid' : ''}`}
                                                />
                                                <ErrorMessage
                                                    name="phone_number"
                                                    component="span"
                                                    className="error-message"
                                                />
                                            </div>

                                            {/* Button */}
                                            <div className="mt-4 text-center">
                                                <button className="next-btn" disabled={isSubmitting} type="submit">
                                                    Next <img className="ps-1" src={auth_button_arrow} alt="" />
                                                </button>
                                            </div>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Orgnisationform
