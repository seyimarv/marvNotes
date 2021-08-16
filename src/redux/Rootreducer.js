import { combineReducers } from "redux";
import notesReducer from "./notes/notes.reducer";

import userReducer from "./user/user.reducers";

const rootReducer = combineReducers({
    user: userReducer,
    notes: notesReducer
})

export default rootReducer