import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core';
import './components/withLoading/withLoading.scss'


const ProtectedRoute = ({ component: Component, currentUser, userLoading }) => {
    const Loggedout = useSelector((state) => state.user.LoggedOut)
    return (
        <Route

            render={props =>
                currentUser.isAuth ?
                    (
                        <Component {...props} />

                    ) : Loggedout ?
                        <Redirect to='/' /> : (
                            <div className="with-loading">
                                <CircularProgress value="M" />
                            </div>
                        )
            }
        />
    )
}

export default ProtectedRoute