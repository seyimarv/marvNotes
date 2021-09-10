import { userActionTypes } from "./user.types";


const INITIAL_STATE = {
    currentUser: {
        isAuth: false,
        token: null,
        userName: null,
        userId: null,
        isLoading: false
    },
    LoggedOut:false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: action.payload
        }
        case userActionTypes.LOGOUT:
        return {
            ...state,
            currentUser: {
                isAuth: false,
                token: null,
                userName: null,
                userId: null,
                isLoading: false
            },
            LoggedOut: true

        }
        default: 
        return state
    }
}


export default userReducer
