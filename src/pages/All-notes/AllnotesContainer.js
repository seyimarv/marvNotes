import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import{ socket} from '../../services/socket'
import { useSelector } from "react-redux";
import { createNote, deleteCurrentNote, fetchCurrentNotes } from '../../redux/notes/notes.actions'
import {  fetchNotes } from '../../services/notes'
import './All-notes.scss'
import WithLoading from '../../components/withLoading/withLoading'
import Allnotes from './All-notes'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar/Sidebar'
import Writenote from '../../components/WriteNote/Writenote'
import EditNote from '../../components/WriteNote/EditNote'
import './All-notes.scss'
import PhoneFooter from '../../components/phonefooter/phonefooter'

const AllnoteCon = (props) => {
    console.log(props.location.pathname)
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    let currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    const isLoading = useSelector((state) => state.notes.currentNotes.isLoading)
    const writeNoteState = useSelector((state) => state.notes.writeNote)
    const editNoteState = useSelector((state) => state.notes.editNote)
    console.log(editNoteState)
    const getNotes = async () => { 
        const notes = await fetchNotes(currentUser.token, false)
        console.log(notes)
        setTimeout(() => {
            dispatch(fetchCurrentNotes({isLoading: false, notes: notes.notes}))
          }, 1000)
       
    }

    const getCreateNote = (note) => {
         if (!note.private) {
            dispatch(createNote(note))
         }
        
    }
    
    
 

    useEffect(() => {
        getNotes()
        
        socket.on('notes', data => {
            if (data.action === 'create') {
                console.log(data.note)
                getCreateNote(data.note)
            } else if (data.action === 'delete') {
              dispatch(deleteCurrentNote(data.note._id)) 

            } else if (data.action === 'update') {
                getNotes()
            }
            else if (data.action === 'like') {
                getNotes()
            }
          })
          return () => {
            socket.off('notes', data => {
                if (data.action === 'create') {
                    console.log(data.note)
                    getCreateNote(data.note)
                } else if (data.action === 'delete') {
                  dispatch(deleteCurrentNote(data.note._id))  
                } else if (data.action === 'like') {
                    getNotes()
                }
              })
          }
    }, [])
 
    return (
        <>
           <Container fluid className="all-notes_container">
                <Row>
                    <Col lg={2} className="all-notes_colummn sidebar-display">
                    <div className='position-fixed'>
                    <Sidebar path={props.location.pathname} />
                    </div>
                     
                    </Col>
                    <Col lg={6}  className={`all-notes_column ${writeNoteState || editNoteState.editingNote === true ? 'nodisplayMobile' : ''}`}>
                       <WithLoading Component={Allnotes} currentNotes={currentNotes} isLoading={isLoading} pathname={props.location.pathname} />
                    </Col>
                    <Col lg={4} className='all-notes_column' >
                      {
                        editNoteState.editingNote ? <EditNote note={editNoteState.note} privacy="false"/> :
                        <Writenote privacy="false" initialTitle='' initialContent=''/>
                      }
                       
                    </Col>
                </Row>
                <PhoneFooter />
            </Container>
         
        </>
    )
}


export default AllnoteCon