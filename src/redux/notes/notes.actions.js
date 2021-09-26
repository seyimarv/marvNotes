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

export const writeNote = () => ({
    type: noteActionTyoes.WRITE_NOTE
})

export const editNote = (note) => ({
    type: noteActionTyoes.EDIT_NOTE,
    payload: note
})

export const updateNote = (note) => ({
    type: noteActionTyoes.UPDATE_NOTE,
    payload: note
})

export const toggleFavorites = (notes) => ({
    type: noteActionTyoes.TOGGLE_FAVORITES,
    payload: notes
})

export const getFavorites = (notes) => ({
    type: noteActionTyoes.GET_FAVORITES,
    payload: notes
})

export const removeFromFavorites = (favorites) => ({
    type: noteActionTyoes.REMOVE_FROM_FAVORITES,
    payload: favorites
})

export const filterSearchResults = (searchQuery) => ({
    type: noteActionTyoes.FILTER_SEARCH_RESULTS,
    payload: searchQuery
})


