import { act } from "react-dom/test-utils"
import { userActionTypes } from "../user/user.types"
import { noteActionTyoes } from "./notes.types"





const INITIAL_STATE = {
    currentNotes: {
        notes: [],
        isLoading: true
    },
    editNote: {
        note: null,
        editingNote: false
    },
    writeNote: false

}


const notesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case (noteActionTyoes.FETCH_NOTES):
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
                },
                writeNote: false
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

        case (noteActionTyoes.WRITE_NOTE):
            return {
                ...state,
                writeNote: !state.writeNote

            }
        case (noteActionTyoes.EDIT_NOTE):
            return {
                ...state,
                editNote: {
                    note: action.payload,
                    editingNote: !state.editNote.editingNote
                }
            }
        case (userActionTypes.LOGOUT):
            return {
                ...state,
                currentNotes: {
                    notes: [],
                    isLoading: true
                },
                editNote: {
                    note: null,
                    editingNote: false
                },
                writeNote: false
            }
        default:
            return state
    }
}

export default notesReducer