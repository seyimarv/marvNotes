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
    writeNote: false,
    Favorites: {
        notes: [],
        isLoading: true
    }
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
                    notes: [action.payload, ...state.currentNotes.notes],
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
        case (noteActionTyoes.UPDATE_NOTE): {
            return {
                ...state,
                currentNotes: {
                    notes: action.payload,
                    isLoading: false
                }
            }
        }
        case (noteActionTyoes.TOGGLE_FAVORITES): {
            return {
                ...state,
                currentNotes: {
                    notes: action.payload,
                    isLoading: false
                }

            }
        }
        case (noteActionTyoes.GET_FAVORITES): {
            return {
                ...state,
                Favorites: {
                    notes: action.payload.notes.filter(note => note.likes.includes(action.payload.currentUser.userId)),
                    isLoading: false
                }
                    
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