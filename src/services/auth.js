
import { writeNote } from "../redux/notes/notes.actions";
import { setCurrentUser, LOGOUT } from "../redux/user/user.actions";

export const loginUser = async (values, dispatch) => {
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
        console.log(response)
        if (response.status === 401) {
            throw new Error(
                "Login failed, check your details and try again"
            );
        }
        if (response.status !== 200 && response.status !== 201) {
            console.log('Error!');
            throw new Error('Login failed, check your network connection');
        }
        const userData = await response.json()
         user = userData
         dispatch(setCurrentUser({isAuth: true, ...user}))
         localStorage.setItem('user', JSON.stringify(user))
         const remainingMilliseconds = 60 * 60 * 1000;
         const expiryDate = new Date(
            new Date().getTime() + remainingMilliseconds
          );
          localStorage.setItem('expiryDate', expiryDate.toISOString());
          setTimeout(() => {
            logout(dispatch)
          }, remainingMilliseconds)
    } catch (error) {
        console.log(error)

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
        user = userData
        console.log(user)
     
    } catch (error) {
        console.log(error)

    }
    // return user
     
}

export const logout = (dispatch) => {
    localStorage.removeItem('user')
    localStorage.removeItem("expiryDate")
 
    dispatch(LOGOUT())
    
}