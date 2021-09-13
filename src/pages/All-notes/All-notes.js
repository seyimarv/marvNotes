import React from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import{ socket} from '../../services/socket'
import Notes from '../../components/Notes/Notes'
import { useSelector } from "react-redux";
import Sidebar from '../../components/Sidebar/Sidebar'
import Writenote from '../../components/WriteNote/Writenote'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './All-notes.scss'
import PhoneFooter from '../../components/phonefooter/phonefooter'
import { createNote, deleteCurrentNote, fetchCurrentNotes, updateNote} from '../../redux/notes/notes.actions'


const Allnotes = ({pathname}) => {
    const currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    const currentUser = useSelector((state) => state.user.currentUser)

    const newpathname = pathname.slice(1);
    const dispatch = useDispatch()
    const getCreateNote = (note) => {
        dispatch(createNote(note))
      }
     
      const getUpdateNote = (note) => {
    
        const updatedNotes = [...currentNotes]
        const updateNoteIndex = updatedNotes.findIndex(not => 
          not._id === note._id
        )
        if (updateNoteIndex > -1) {
          updatedNotes[updateNoteIndex]= note
        }
        console.log(updatedNotes)
        return updatedNotes
        
      }
    
    useEffect(() => {
        socket.on('notes', data => {
            if (data.action === 'create') {
              getCreateNote(data.note)
            } else if (data.action === 'delete') {
              dispatch(deleteCurrentNote(data.note._id))
      
            } else if (data.action === 'update') {
              const updatedNotes = getUpdateNote(data.note)
              dispatch(updateNote(updatedNotes))
            }
            else if (data.action === 'like') {
                // const favoriteNote = toggleFavoriteNotes(data.note, currentUser.userId)
                // console.log(favoriteNote)
                const updatedNotes =  getUpdateNote(data.note)
                dispatch(updateNote(updatedNotes))
            }
          }).off('notes', data => {
            if (data.action === 'create') {
              console.log(data.note)
              getCreateNote(data.note)
            } else if (data.action === 'delete') {
              dispatch(deleteCurrentNote(data.note._id))
            } else if (data.action === 'like') {
            //    const favoriteNote = toggleFavoriteNotes(data.note, currentUser.userId)
            //    console.log("yessssssss")
               const updatedNotes =  getUpdateNote(data.note)
               dispatch(updateNote(updatedNotes))
            }
          })
    })
    console.log(pathname)
   
 
   
    return (
        <>
            
         <Notes Notes={currentNotes} page={newpathname} PageIcon={LibraryBooksIcon} token={currentUser.token}/>
           
        </>
    )
}


export default  Allnotes