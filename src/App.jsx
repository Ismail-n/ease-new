// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Import your pages
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import DashboardPage from './components/Dashboard';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PrivacyPolicies from './components/PrivacyPolicies';
import Payment from './components/Payment';
import WelcomeMessage from './components/WelcomePages/WelcomeMessage';
import Orgnisationform from './components/WelcomePages/Orgnisationform';
import Homepage from './components/Homepage';





function App() {
  const isLogin = !!localStorage.getItem('isLogin');

  const [loginState, setLoginState] = useState(isLogin);
  const loginGlobalStateValue = useSelector((state) => state.counter.value);


  return (
    <GoogleOAuthProvider clientId="409955557545-vvf3eg4aa54vkchnhplnnumbtbruengh.apps.googleusercontent.com">
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            {isLogin || loginGlobalStateValue ? (
              <>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/subscription" element={<Payment />} />
                <Route path="/orgnisation-registration" element={<Orgnisationform />} />
                <Route path="/welcome-message" element={<WelcomeMessage />} />
              </>
            ) : (
              <>
                <Route path="/" element={<LoginPage />} />
                <Route path="/privacy-policies" element={<PrivacyPolicies />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
