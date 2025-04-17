import React, { useState } from 'react'
import '../App.css'
import { NavLink, useNavigate } from 'react-router'
import ease_logo from '../assets/images/ease-icon-new.svg'
import apple_icon from '../assets/images/apple-icon.svg'
import google_icon from '../assets/images/google-icon.svg'
import auth_button_arrow from '../assets/images/auth-button-arrow.svg'
import { useGoogleLogin } from '@react-oauth/google'
import { useDispatch, useSelector } from 'react-redux'
import { setLogin } from '../features/counter/CounterSlice'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';


function Login() {

  const navigate = useNavigate();
  const [loginComponent, setLoginComponent] = useState(true);
  const dispatch = useDispatch();

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      // const decoded = jwtDecode(tokenResponse.token);
      // console.log(decoded)

      localStorage.setItem('isLogin', true);
      dispatch(setLogin(true));
      // You can send tokenResponse.access_token to your backend
    },
    onError: () => console.log('Login Failed'),
  });

  const loginUsingCreds = () => {
    localStorage.setItem('isLogin', true);
    dispatch(setLogin(true));
  };

  // Login validations shema using Yup
  const LoginValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required')
  });

  const SignUpValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),

    first_name: Yup.string()
      .min(3, 'First name must be at least 3 characters')
      .required('First name is required'),

    last_name: Yup.string()
      .min(8, 'Last name must be at least 3 characters')
      .required('Last name is required'),
  });


  const LoginPageFormFields = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginValidationSchema}
        onSubmit={(values) => {
          loginUsingCreds(); // Your login logic
        }}
      >
        {({ errors, touched }) => (
          <Form className="authentication-form login-form mt-4">
            <div className="form-group">
              <Field name="email" type="text"
                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                placeholder="Email" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="form-group mt-3">
              <Field name="password" type="password"
                className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                placeholder="Password" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="form-check mt-3">
              <input type="checkbox" className="form-check-input" id="check-remember-me" />
              <label className="form-check-label" htmlFor="check-remember-me">Check me out</label>
            </div>

            <button type="submit" className="btn auth-btn btn-primary auth-submit-btn">
              Sign in <img src={auth_button_arrow} alt="" />
            </button>

            <div className="authentication-form-bottom mt-4 text-center">
              <span className="account-bottom-statement mt-4">Don't have an account?</span>
              <button className="conditional-btn" onClick={() => setLoginComponent(false)}> Sign Up.</button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };


  const SignupPageFormFields = () => {
    return (
      <Formik
        initialValues={{ email: '', password: '', first_name: '', last_name: '', agree: false }}
        validationSchema={SignUpValidationSchema}
        onSubmit={(values) => {
          console.log('Signup form submitted:', values);
          // Your signup logic here
        }}
      >
        {({ errors, touched }) => (
          <Form className="authentication-form login-form mt-4">
            <div className="form-group">
              <Field name="email" type="text"
                className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                placeholder="Email address" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>

            <div className="form-group mt-3">
              <Field name="password" type="password"
                className={`form-control ${touched.password &&  errors.password ? 'is-invalid' : ''}`}
                placeholder="Password" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>

            <div className="form-group mt-3">
              <Field name="first_name" type="text"
                className={`form-control ${touched.first_name &&  errors.first_name ? 'is-invalid' : ''}`}
                placeholder="First name" />
              <ErrorMessage name="first_name" component="div" className="text-danger" />
            </div>

            <div className="form-group mt-3">
              <Field name="last_name" type="text"
                className={`form-control ${touched.last_name &&  errors.last_name ? 'is-invalid' : ''}`}
                placeholder="Last name" />
              <ErrorMessage name="last_name" component="div" className="text-danger" />
            </div>

            <div className="form-check mt-3">
              <Field name="agree" type="checkbox"
                className="form-check-input"
                id="agree-terms" />
              <label className="form-check-label" htmlFor="agree-terms">
                By signing up, I agree to the T&C
              </label>
              <ErrorMessage name="agree" component="div" className="text-danger" />
            </div>

            <button type="submit" className="btn auth-btn btn-primary auth-submit-btn">
              Sign up <img src={auth_button_arrow} alt="" />
            </button>

            <div className="authentication-form-bottom mt-4 text-center">
              <span className="account-bottom-statement mt-4">Already have an account?</span>
              <button className="conditional-btn" onClick={() => setLoginComponent(true)}> Sign in.</button>
            </div>
          </Form>
        )}
      </Formik>
    );
  };




  return (
    <>
      <div className='row'>
        <div className="col-lg-5 col-sm-12 col-md-12">
          <div id="login-form-wrapper">
            <div id='authentication-form-wrapper'>
              <h1 className='authentication-heading'>{loginComponent ? "Log In " : "Sign Up"}</h1>
              <div className="authentication-form mt-5">
                <div className="social-logins-wrapper">
                  <div className="authentication-form-conditional-saperators">
                    <span>continue with</span>
                  </div>
                  <button onClick={() => login()} className='btn btn-large mt-4 login-google auth-btn'><img src={google_icon} alt="" /> Sign in with Google</button>
                  <button className='btn btn-large mt-4 login-apple auth-btn'><img src={apple_icon} alt="" /> Sign in with Apple</button>

                  <div className="authentication-form-conditional-saperators mt-4">
                    <span>or</span>
                  </div>
                </div>
                {/* Form start */}
                {loginComponent ? <LoginPageFormFields /> : <SignupPageFormFields />}
                {/* Form end */}
              </div>
              <p className='text-center fw-bold'>Please read our <NavLink to='/privacy-policies'>Privacy Policies</NavLink> </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 auth-form-right">
          <img src={ease_logo} alt="" />
        </div>
      </div></>
  )
}

export default Login
