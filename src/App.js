import React from 'react'
import ResetPassword from './pages/AuthPages/ResetPassword/ResetPassword';
import LoginPage from './pages/AuthPages/Loginpage/LoginPage';
import ForgotPassword from './pages/AuthPages/ForgotPassword/ForgotPassword';
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
import Favoritespage from './pages/Favorites/Favoritespage';
import NotePage from './pages/NotePage/NotePage';
import SearchPage from './pages/Searchpage/SearchPage';
import Writenote from './components/WriteNote/Writenote';
import Editnote from './components/Editnote/Editnote'

const App = (props) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.currentUser)
  

  const autoLogout = (milliseconds) => {
    setTimeout(() => {
    
    
      logout(dispatch)
 
    }, milliseconds)
  }


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
             <Redirect from='/' to='/Public Notes' />
          ) : (
            <LandingPage />
          )
        }
     />
         <Route exact path ='/Signup' render={() =>
          currentUser.isAuth ? (
             <Redirect to='/Public Notes' />
          ) : (
             <SignupPage />
          )
        } />
         <Route exact path ='/Login'  render={() =>
          currentUser.isAuth ? (
             <Redirect to='/Public Notes' />
          ) : (
             <LoginPage/>
          )
        } />
    <ProtectedRoute exact path='/Public Notes' component={AllnotesCon} currentUser={currentUser}/>
    <ProtectedRoute exact path='/Private Notes' component={AllnotesCon} currentUser={currentUser} />
    <ProtectedRoute exact path='/Favorites' component={Favoritespage} currentUser={currentUser} />
    <ProtectedRoute exact path='/Note/:id' component={NotePage} currentUser={currentUser} />
    <ProtectedRoute exact path='/Search' component={SearchPage} currentUser={currentUser} />
    <ProtectedRoute exact path='/Write' component={Writenote} currentUser={currentUser} />
    <ProtectedRoute exact path='/Editnote' component={Editnote} currentUser={currentUser} />
    <Route exact path='/forgot-password' render={() =>
          currentUser.isAuth ? (
             <Redirect to='/All Notes' />
          ) : (
             <ForgotPassword />
          )
        }  />
      <Route exact path='/reset/:token' render={(props) =>
          currentUser.isAuth ? (
             <Redirect to='/Public Notes' />
          ) : (
             <ResetPassword {...props} />
          )
        }  />
      
    
  </Switch>




  );
}

export default App;
