import React from 'react'
import ForgotPassword from './pages/AuthPages/ResetPassword/ResetPassword';
import LoginPage from './pages/AuthPages/Loginpage/LoginPage';
import ResetPassword from './pages/AuthPages/ForgotPassword/ForgotPassword';
import LandingPage from './pages/Landingpage/landingpage';
import SignupPage from './pages/AuthPages/SignupPage/SignupPage';
import './App.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './services/auth';
import { setCurrentUser } from './redux/user/user.actions';

const App = () => {
  const dispatch = useDispatch()

  const autoLogout = (milliseconds) => {
    setTimeout(() => {
      logout()
    }, milliseconds)
  }
  useEffect(() => {
    const user = localStorage.getItem('user')
    const expiryDate = localStorage.getItem('expiryDate')
    const fetchedUser = JSON.parse(user)

    if (!fetchedUser || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      logout()
      return;
    }
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    dispatch(setCurrentUser({ isAuth: true, ...fetchedUser}))
    autoLogout(remainingMilliseconds);
  }, [])

  return (
    <LoginPage />




  );
}

export default App;
