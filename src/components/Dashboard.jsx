import { BenefitPayButton, Edges, Locale } from '@tap-payments/benefit-pay-button'
import React, { useState } from 'react'
import google_icon from '../assets/images/google-icon.svg'
import { useDispatch } from 'react-redux';
import { setLogin } from '../features/counter/CounterSlice';
import { NavLink } from 'react-router';


function Dashboard() {
  const [navBubble, setNavBubble] = useState(false);
  const dispatch = useDispatch();
  const showOrHideBubble = () => {
    if (navBubble) {
      setNavBubble(false);
    } else {
      setNavBubble(true);
    }
  };
  const clickOnLogoutButton = () => {

    localStorage.removeItem('isLogin');
    dispatch(setLogin(false));
  };
  return (
    <div className='row'>
      <div className="col-12">
        <div className="row">
          <div className="col-lg-6 bg-info">
            <div className="d-flex justify-content-around">
            <NavLink to='/homepage'>Homepage</NavLink>
            <NavLink to='/subscription'>Subscription</NavLink>
            <NavLink to='/orgnisation-registration'>Registration</NavLink>
            <NavLink to='/welcome-message'>Welcome</NavLink>
            </div>
          </div>
          <div className="col-lg-6 navPanel">
            <div className="userProfileBubble mt-3">
              <button onClick={showOrHideBubble}><img src={google_icon} alt="" /></button>
            </div>
            {
              !navBubble ? null :

                <div className="navBubbleDropdownOptionswrapper">
                  <div className="navBubbleDropdownOptions">
                    <ul>
                      <li>Profile</li>
                      <li>Settings</li>
                      <li onClick={clickOnLogoutButton}>Logout</li>
                    </ul>

                  </div>
                </div>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 bg-primary">
            <h1>3</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
