import { noteActionTyoes } from "./notes.types"



const INITIAL_STATE = {
    currentNotes: {
        notes: [],
        isLoading: false
    }
}


const notesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case(noteActionTyoes.FETCH_NOTES):
        return {
             ...state,
            currentNotes: action.payload
        }

        default: 
        return state
    }
}

export default notesReducer