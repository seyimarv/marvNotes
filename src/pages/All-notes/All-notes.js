import React from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import openSocket from 'socket.io-client';
import Notes from '../../components/Notes/Notes'
import { useSelector } from "react-redux";
import Sidebar from '../../components/Sidebar/Sidebar'
import Writenote from '../../components/WriteNote/Writenote'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { createNote, deleteCurrentNote, fetchCurrentNotes } from '../../redux/notes/notes.actions'
import { deleteNote, fetchNotes } from '../../services/notes'
import './All-notes.scss'
import { useState } from 'react';


const Allnotes = (props) => {
    console.log(props.location.pathname)
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    let currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    
    const socket =  openSocket('http://localhost:8081');
    const getNotes = async () => { 
        const notes = await fetchNotes(currentUser.token)
        dispatch(fetchCurrentNotes({isLoading: false, notes: notes.notes}))
    }

    useEffect(() => {
        getNotes()
        socket.on('notes', data => {
            if (data.action === 'create') {
                console.log(data.note)
                //  dispatch(createNote(data.note))
            } else if (data.action === 'delete') {
            //    currentNotes = currentNotes.filter(note => 
            //         note._id === data.note._id)
            //   dispatch(deleteCurrentNote(data.note))
                
            } else if (data.action === 'like') {
                getNotes()
            }
          });//listen to the event defined in
    }, [])
   
    return (
        <>
            <Container fluid className="all-notes_container">
                <Row>
                    <Col lg={2} className="all-notes_colummn">
                    <div className='position-fixed'>
                    <Sidebar path={props.location.pathname} />
                    </div>
                     
                    </Col>
                    <Col lg={6}  className="all-notes_colummn">
                        <Notes Notes={currentNotes} page='All notes' PageIcon={LibraryBooksIcon} token={currentUser.token}/>
                    </Col>
                    <Col lg={4}  className="all-notes_colummn">
                        <Writenote />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Allnotes