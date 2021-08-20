import { createSelector } from "reselect"
import { noteActionTyoes } from "./notes.types"





const INITIAL_STATE = {
    currentNotes: {
        notes: [],
        isLoading: false
    },
}


const notesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case(noteActionTyoes.FETCH_NOTES):
        return {
             ...state,
            currentNotes: action.payload
        }
        case (noteActionTyoes.CREATE_NOTE):
            return {
                ...state,
                currentNotes: {
                    notes: [...state.currentNotes.notes, action.payload],
                    isLoading: false
                }
           }
        case (noteActionTyoes.DELETE_NOTE):
            return {
                ...state,
                currentNotes: {
                    notes: state.currentNotes.notes.filter(note => 
                        note._id !== action.payload),
                    isLoading: false
                }
           }
        //    case (noteActionTyoes.LIKE_NOTE):
        //     return {
        //         ...state,
        //         currentNotes: {
        //             notes: state.currentNotes.notes.filter(note => 
        //                 note._id !== action.payload),
        //             isLoading: false
        //         }
        //    }
        default: 
        return state
    }
}

export default notesReducer