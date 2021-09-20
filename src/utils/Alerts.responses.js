import Swal from 'sweetalert2'
import './Alerts.scss'

const Toast = Swal.mixin({
    toast: true,
    position: 'bottom',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: 'toast-alert'
})

//Alerts for success responses
export const loginSuccess = () => {
    Toast.fire({
        icon: 'success',
        title:  "<p>" + 'Logged in successfully' + "</p>" 
    })
}

export const signUpSuccess = () => {
    Toast.fire({
        icon: 'success',
        title:  "<p>" + 'Signed up successfully' + "</p>"
    })
}

export const logOutSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: "<p>" + 'Logged out successfully' + "</p>"
    })
}

export const resetPasswordSuccess = () => {
    Toast.fire({
        icon: 'success',
        title: "<p>" + 'Password reset successful' + "</p>"
    })
}



export const addNoteSuccess  = () => {
    Toast.fire({
        icon: 'success',
        title:  "<p>" + 'Note added' + "</p>"
    })
}

export const updateNoteSuccess  = () => {
    Toast.fire({
        icon: 'success',
        title:  "<p>" + 'Note Edited' + "</p>"
    })
}

export const toggleLikeSucces = (added) => {
    added === 'added' ?  Toast.fire({
        icon: 'success',
        title:  "<p>" + 'Note added to favorites' + "</p>"
    }) :  Toast.fire({
        icon: 'success',
        title:  "<p>" + 'Note Removed from favorites' + "</p>"
    })
}


//Alerts for error responses
export const loginFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title:  "<p>" + err + "</p>"
    })
}

export const signupFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title:   "<p>" + err + "</p>" 
    })
}

export const forgotPasswordFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title: "<p>" + err + "</p>"
    })
}


export const resetPasswordFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title: "<p>" + err + "</p>"
    })
}

export const fetchpostFailure = (err) => {
    Toast.fire({
        icon: 'error',
        title: "<p>" +  'Unable to load notes, please check your network connection and reload the page'  + "</p>"
    }) 
}

export const addNoteFailure  = () => {
    Toast.fire({
        icon: 'error',
        title:  "<p>" +  'Unable to Add notes, please check your network connection and reload the page'  + "</p>" 
    })
}

export const updateNoteFailure  = () => {
    Toast.fire({
        icon: 'error',
        title:  "<p>" +  'Unable to edit note, please check your network connection and reload the page'  + "</p>"
    })
}


//info
export const logoutCheck = (logout, dispatch, history) => {
    Swal.fire({
        title: "<p>" + 'Are you sure you want to logout?' + "</p>",
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
        confirmButtonColor: "#424CA0",
        denyButtonColor: "#ff0099",
        customClass: 'swalcheck-wide'
      }).then((result) => {
     
        if (result.isConfirmed) {
            logout(dispatch, history)
          Swal.fire('Logout successful', '', 'success')
        } 
      })
}

export const deleteNoteCheck = (deleteNote) => {
    Swal.fire({
        title:  "<p>Are you sure you want to delete this note?</p>",
        showDenyButton: true,
        confirmButtonText: 'Yes',
        denyButtonText: `No`,
        confirmButtonColor: "#424CA0",
        denyButtonColor: "#ff0099",
        customClass: 'swalcheck-wide'
      }).then((result) => {
     
        if (result.isConfirmed) {
            deleteNote()
          Swal.fire('Note deleted', '', 'success')
        } 
      })
}

