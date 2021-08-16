import { noteActionTyoes } from "./notes.types"

export const fetchCurrentNotes = notes => ({
    type: noteActionTyoes.FETCH_NOTES,
    payload: notes
})