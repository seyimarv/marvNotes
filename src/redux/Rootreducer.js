import { combineReducers } from "redux";
import notesReducer from "./notes/notes.reducer";

import {persistReducer} from 'redux-persist'

import userReducer from "./user/user.reducers";

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['notes']
}

const rootReducer = combineReducers({
    user: userReducer,
    notes: notesReducer
})

export default  rootReducer