import React from 'react'
import ForgotPassword from './pages/AuthPages/ResetPassword/ResetPassword';
import LoginPage from './pages/AuthPages/Loginpage/LoginPage';
import ResetPassword from './pages/AuthPages/ForgotPassword/ForgotPassword';
import LandingPage from './pages/Landingpage/landingpage';
import SignupPage from './pages/AuthPages/SignupPage/SignupPage';
import './App.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './services/auth';
import { setCurrentUser} from './redux/user/user.actions';
import AllnotesCon from './pages/All-notes/AllnotesContainer';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = (props) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.currentUser)
  

  const autoLogout = (milliseconds) => {
    setTimeout(() => {
    
    
      logout(dispatch)
 
    }, milliseconds)
  }

  console.log(props)
  useEffect(() => {
   let fetchUser = true
   let fetchedUser
    const user = localStorage.getItem('user')
    const expiryDate = localStorage.getItem('expiryDate')
    if(fetchUser)  {
      fetchedUser = JSON.parse(user)
    }
  
    dispatch(setCurrentUser({isLoading: true, ...fetchedUser}))

    if (!fetchedUser || !expiryDate) {
      dispatch(setCurrentUser({isLoading: false, ...fetchedUser}))
      return;
     
    }
    if (new Date(expiryDate) <= new Date()) {
      logout(dispatch)
      dispatch(setCurrentUser({isLoading: false, ...fetchedUser}))
     
      return;
    }
    const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
    dispatch(setCurrentUser({ isAuth: true, isLoading: false, ...fetchedUser }))
    autoLogout(remainingMilliseconds);
   
    return () => {
      fetchUser = false
      dispatch(setCurrentUser({isAuth: false, isLoading: false}))
    }
  }, [])

  return (
    <Switch>
    <Route 
       exact path = '/'
       render={() =>
          currentUser.isAuth ? (
             <Redirect from='/' to='/All Notes' />
          ) : (
            <LandingPage />
          )
        }
     />
         <Route exact path ='/Signup' render={() =>
          currentUser.isAuth ? (
             <Redirect to='/All Notes' />
          ) : (
             <SignupPage />
          )
        } />
         <Route exact path ='/Login'  render={() =>
          currentUser.isAuth ? (
             <Redirect to='/All Notes' />
          ) : (
             <LoginPage/>
          )
        } />
    <ProtectedRoute exact path='/All Notes' component={AllnotesCon} currentUser={currentUser}/>
    <ProtectedRoute exact path='/My Notes' component={AllnotesCon} currentUser={currentUser} />
      
    
  </Switch>




  );
}

export default App;
