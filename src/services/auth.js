
import { writeNote } from "../redux/notes/notes.actions";
import { setCurrentUser, LOGOUT } from "../redux/user/user.actions";
import { forgotPasswordFailure, loginFailure, loginSuccess, logOutSuccess, resetPasswordFailure, resetPasswordSuccess, signupFailure, signUpSuccess } from "../utils/Alerts.responses";

export const loginUser = async (values, dispatch, path) => {
    let user;
    try {
        const response = await fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password
            })
        })
        if (response.status === 401) {
            throw new Error(
                "Login failed, check your details and try again"
            );
        }
        if (response.status !== 200 && response.status !== 201) {
            throw new Error('Login failed, check your network connection');
        }
        const userData = await response.json()
         user = userData
         dispatch(setCurrentUser({isAuth: true, ...user}))
         localStorage.setItem('user', JSON.stringify(user))
         if(path) {
            loginSuccess()
        }
         const remainingMilliseconds = 60 * 60 * 1000;
         const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem('expiryDate', expiryDate.toISOString());
          setTimeout(() => {
            logout(dispatch)
          }, remainingMilliseconds)
    } catch (error) {
        if(path) {
            loginFailure(error)
        }
       

    }

}


export const signUpUser = async (values) => {
    let user
    try {
        const response = await fetch('http://localhost:8081/auth/signup', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
                password: values.password,
                name: values.name,
            })
        })
        console.log(response)
        if (response.status === 422) {
            throw new Error(
                "Validation failed. Make sure the email address isn't used yet!"
            );
        }
        if (response.status !== 200 && response.status !== 201) {
            console.log('Error!');
            throw new Error('Creating a user failed!');
        }
        const userData = await response.json()
        signUpSuccess()
    } catch (error) {
        signupFailure(error)

    }
    // return user
     
}

export const logout = (dispatch, history) => {
    localStorage.removeItem('user')
    localStorage.removeItem("expiryDate")
 
    dispatch(LOGOUT())
    if(history) {
        history.push('/')
    }
    logOutSuccess()
    
}
 
export const forgotPassword =async (values, dispatch, setEmailSent) => {
    let user;
    try {
        const response = await fetch('http://localhost:8081/auth/forgot-password', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: values.email,
            })
        })
        if (response.status === 401) {
            throw new Error(
                "This email does not exist, try with another email"
            );
        }
        if (response.status !== 200 && response.status !== 201) {
            throw new Error('an error occured, please check your network connection');
        }
        const userData = await response.json()
         user = userData.user
         setEmailSent(true)
         
         localStorage.setItem('userResetId', JSON.stringify(user._id))
         const remainingMilliseconds = 60 * 60 * 10000;
         const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem('expiryDate', expiryDate.toISOString());
    } catch (error) {
        forgotPasswordFailure(error)

    }
}

export const resetPassword =async (values, token,  history) => {
    try {
        const response = await fetch(`http://localhost:8081/auth/reset-password/${token}`, {
            method: 'PUT',
            headers: {
                 Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: values.password,
                token: token,
            })
        })
        if (response.status === 401) {
            throw new Error(
                "Password reset failed"
            );
        }
        if (response.status !== 200 && response.status !== 201) {
            throw new Error('Password failed, check your network connection');
        }
        const userData = await response.json()
         resetPasswordSuccess()
          
          history.push('/login')
    } catch (error) {
       resetPasswordFailure(error)
    }
}