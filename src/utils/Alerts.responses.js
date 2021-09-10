import Swal from 'sweetalert2'
import './Alerts.scss'

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
})

//Alerts for success responses
export const loginSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: 'logged in successfully' 
    })
}

export const signUpSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: 'Sign up successfull'
    })
}

export const logOutSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: 'Logged out successfully'
    })
}

export const addNoteSuccess  = () => {
    Toast.fire({
        icon: 'success',
        title:  'Note added' 
    })
}

//Alerts for error responses
export const loginFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title:  err 
    })
}

export const signupFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title:  err 
    })
}

export const fetchpostFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title:  'Unable to load notes, please check your network connection and reload the page' 
    })
}

export const addNoteFailure  = () => {
    Toast.fire({
        icon: 'error',
        title:  'Unable to Add note, please check your network connection' 
    })
}

export const updateNoteFailure  = () => {
    Toast.fire({
        icon: 'error',
        title:  'Unable to update note, please check your network connection and try again' 
    })
}


//info
export const logoutCheck = (logout, dispatch, history) => {
    Swal.fire({
        title: 'Are you sure you want to logout?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
     
        if (result.isConfirmed) {
            logout(dispatch, history)
          Swal.fire('Logout successful', '', 'success')
        } 
      })
}

export const deleteNoteCheck = (deleteNote) => {
    Swal.fire({
        title: 'Are you sure you want delete this Note?',
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
      }).then((result) => {
     
        if (result.isConfirmed) {
            deleteNote()
          Swal.fire('Note deleted', '', 'success')
        } 
      })
}