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
import { jwtDecode } from 'jwt-decode'

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
    // navigate('/dashboard');
  };

  const LoginPageFormFields = () => {
    return (
      <>
        <div className="authentication-form login-form mt-4">
          <div className="form-group"><input type="text" className="form-control" id="" placeholder="" /></div>
          <div className="form-group mt-3"><input type="password" className="form-control" id="" placeholder="" /></div>
          <div className="form-check mt-3"><input type="checkbox" className="form-check-input" id="check-remember-me" />
            <label className="form-check-label" htmlFor="check-remember-me">Check me out</label>
          </div>
          <button onClick={() => loginUsingCreds()}
            className='btn auth-btn btn-primary auth-submit-btn'>Sign in <img src={auth_button_arrow} alt="" />
          </button>
        </div>
        <div className="authentication-form-bottom mt-4 text-center">
          <span className='account-bottom-statement mt-4'>Don't have an account?</span>
          {/* <NavLink>Sign Up</NavLink> */}
          <button className='conditional-btn' onClick={() => setLoginComponent(false)}> Sign Up.</button>
        </div>
      </>

    );
  };
  const SignupPageFormFields = () => {
    return (
      <>
        <div className="authentication-form login-form mt-4">
          <div className="form-group"><input type="text" className="form-control" id="" placeholder="Email address" /></div>
          <div className="form-group mt-3"><input type="password" className="form-control" id="" placeholder="Password" /></div>
          <div className="form-group mt-3"><input type="password" className="form-control" id="" placeholder="First name" /></div>
          <div className="form-group mt-3"><input type="password" className="form-control" id="" placeholder="Last name" /></div>
          <div className="form-check mt-3"><input type="checkbox" className="form-check-input" id="agree-terms" />
            <label className="form-check-label" htmlFor="agree-terms">By signing up, i agree to the T&C</label>
          </div>
          <button
            className='btn auth-btn btn-primary auth-submit-btn'>Sign up <img src={auth_button_arrow} alt="" />
          </button>
        </div>
        <div className="authentication-form-bottom mt-4 text-center">
          <span className='account-bottom-statement mt-4'> Already have an account ?</span>
          {/* <NavLink>Sign Up</NavLink> */}
          <button className='conditional-btn' onClick={() => setLoginComponent(true)}>  Sign in.</button>
        </div>
      </>
    )
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
