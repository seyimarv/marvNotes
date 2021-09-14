import { createNote, deleteCurrentNote, editNote } from "../redux/notes/notes.actions";
import { addNoteFailure, fetchpostFailure, addNoteSuccess, updateNoteFailure, toggleLikeSucces, updateNoteSuccess } from "../utils/Alerts.responses";


export const addNote = async (Values, token) => {
   try {
       const response = await fetch('http://localhost:8081/note/note', {
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
       console.log(response)
       if (response.status === 401) {
        throw new Error(
            "Adding note failed"
        );
    }
    if (response.status !== 200 && response.status !== 201) {
        console.log('Error!');
        throw new Error('Adding note failed, check your network connection');
    }
    const noteData = await response.json()
    console.log(noteData)
    Values.title = ''
    Values.content = ''
    addNoteSuccess()
   } catch(err) {
        addNoteFailure()
   }
}

export const updateNote = async (Values, token, id, dispatch) => {
    try {
        const response = await fetch(`http://localhost:8081/note/note/${id}`, {
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
        console.log(response)
        if (response.status === 401) {
         throw new Error(
             "Updating note failed"
         );
     }
     if (response.status !== 200 && response.status !== 201) {
         console.log('Error!');
         throw new Error('Updating note failed, check your network connection');
     }
     const noteData = await response.json()
     console.log(noteData)
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
        const response = await fetch('http://localhost:8081/note/note', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token,
                Privacy: privacy
            }
        })
        if (response.status !== 200 && response.status !== 201) {
            console.log('Error!');
            throw new Error('Fetching notes failed, check your network connection');
        }
        const fetchedNotes = await response.json()
        notes = fetchedNotes
        console.log(notes)
        return notes
    } catch(err) {
         fetchpostFailure()
    }
}

export const deleteNote = async (token, id, dispatch) => {
    console.log(token, id)
    try {
        const response =  await fetch(`http://localhost:8081/note/note/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        console.log(response)
        if (response.status !== 200 && response.status !== 201) {
            console.log('Error!');
            throw new Error('deleting notes failed, check your network connection');
        }
        dispatch(deleteCurrentNote(id))
    } catch(err) {
        console.log(err)
    }
}


export const toggleLike = async (token, id) => {
    try {
        const response =  await fetch(`http://localhost:8081/note/note/${id}`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        if (response.status !== 200 && response.status !== 201) {
            console.log('Error!');
            throw new Error('deleting notes failed, check your network connection');
        }
       const resp = await response.json()
        console.log(resp)
        if (resp.message == 'Note unLiked') {
            toggleLikeSucces()
        } else {
            toggleLikeSucces('added')
        }
    
    } catch(err) {
        console.log(err)
    }
}

// export const toggleFavoriteNotes = (note, likeuserId) => {
//     const findNote = note.likes.includes(likeuserId)
//     console.log(note.likes, likeuserId)
//     if(findNote) {
//        const likes = note.likes.filter(userId => likeuserId !== userId)
//        note.likes = likes
//        console.log(note.likes)
//     } else {
//        const likes = [likeuserId, ...note.likes]
//       note.likes = likes
//     }
//     return note;

// }