import { noteActionTyoes } from "./notes.types"

export const fetchCurrentNotes = notes => ({
    type: noteActionTyoes.FETCH_NOTES,
    payload: notes
})

export const deleteCurrentNote = id => ({
    type: noteActionTyoes.DELETE_NOTE,
    payload: id
})

export const createNote = note => ({
    type: noteActionTyoes.CREATE_NOTE,
    payload: note
})