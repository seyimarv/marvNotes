import React from 'react'
import { Redirect, Route } from 'react-router-dom'



const ProtectedRoute = ({ component: Component, currentUser, userLoading }) => {
    console.log(currentUser)
    return (
        <Route

            render={props =>
                currentUser.isLoading ? (
                    <h1>Loading</h1>
                ) : currentUser.isAuth ?(

                    <Component {...props} />
                ) : (
                    <Redirect to='/'  />
                )
            }
        />
    )
}

export default ProtectedRoute