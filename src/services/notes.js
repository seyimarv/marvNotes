import { createNote, deleteCurrentNote, editNote } from "../redux/notes/notes.actions";
import { addNoteFailure, fetchpostFailure, addNoteSuccess, updateNoteFailure, toggleLikeSucces, updateNoteSuccess } from "../utils/Alerts.responses";


export const addNote = async (Values, token) => {
   try {
       const response = await fetch('https://marvnotesbackend.herokuapp.com/note/note', {
           method: 'POST',
           headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
           },
           body: JSON.stringify({
               title: Values.title,
               content: Values.content,
               privacy: Values.privacy
           })
       })
   
       if (response.status === 401) {
        throw new Error(
            "Adding note failed"
        );
    }
    if (response.status !== 200 && response.status !== 201) {
   
        throw new Error('Adding note failed, check your network connection');
    }
    Values.title = ''
    Values.content = ''
    addNoteSuccess()
   } catch(err) {
        addNoteFailure()
   }
}

export const updateNote = async (Values, token, id, dispatch) => {
    try {
        const response = await fetch(`https://marvnotesbackend.herokuapp.com/note/note/${id}`, {
            method: 'PUT',
            headers: {
             'Content-Type': 'application/json',
             Authorization: 'Bearer ' + token
            },
            body: JSON.stringify({
                title: Values.title,
                content: Values.content,
                privacy: Values.privacy
            })
        })
    
        if (response.status === 401) {
         throw new Error(
             "Updating note failed"
         );
     }
     if (response.status !== 200 && response.status !== 201) {
     
         throw new Error('Updating note failed, check your network connection');
     }
   
  
     Values.title = ''
     Values.content = ''
    
     dispatch(editNote(null))
     updateNoteSuccess()
    } catch(err) {
        updateNoteFailure()
    }

}


export const fetchNotes = async (token, privacy) => {
    let notes
    try {
        const response = await fetch('https://marvnotesbackend.herokuapp.com/note/note', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                Privacy: privacy
            }
        })
        if (response.status !== 200 && response.status !== 201) {
           
            throw new Error('Fetching notes failed, check your network connection');
        }
        const fetchedNotes = await response.json()
        notes = fetchedNotes
    
        return notes
    } catch(err) {
         fetchpostFailure()
    }
}

export const fetchSearchNotes = async (token) => {
    let notes
    try {
        const response = await fetch('https://marvnotesbackend.herokuapp.com/note/search', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
        if (response.status !== 200 && response.status !== 201) {
      
            throw new Error('getting search results failed, check your network connection');
        }
        const fetchedNotes = await response.json()
        notes = fetchedNotes
   
        return notes
    } catch(err) {
         fetchpostFailure()
    }
}

export const fetchNote = async (token, id) => {
    let note
    try {
        const response = await fetch(`https://marvnotesbackend.herokuapp.com/note/note/${id}`, {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
            }
        })
        if (response.status !== 200 && response.status !== 201) {
        
            throw new Error('Fetching note failed, check your network connection');
        }
        const fetchedNote = await response.json()
        note = fetchedNote
        return note
    } catch(err) {
         fetchpostFailure()
    }
}

export const deleteNote = async (token, id, dispatch) => {

    try {
        const response =  await fetch(`https://marvnotesbackend.herokuapp.com/note/note/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
      
        if (response.status !== 200 && response.status !== 201) {
        
            throw new Error('deleting notes failed, check your network connection');
        }
        dispatch(deleteCurrentNote(id))
    } catch(err) {
       
    }
}


export const toggleLike = async (token, id) => {
    try {
        const response =  await fetch(`https://marvnotesbackend.herokuapp.com/note/note/${id}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        if (response.status !== 200 && response.status !== 201) {
        
            throw new Error('deleting notes failed, check your network connection');
        }
       const resp = await response.json()
        if (resp.message == 'Note unLiked') {
            toggleLikeSucces()
        } else {
            toggleLikeSucces('added')
        }
    
    } catch(err) {
 
    }
}

