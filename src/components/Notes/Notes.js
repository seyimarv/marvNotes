import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from 'react-bootstrap'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { deleteNote, toggleLike } from '../../services/notes'
import './Notes.scss'
import ClickAway from '../notedropdown/notedropdown';
import Note from './Note';
import SearchBar from '../searchBar/searchBar';

const Notes = ({ Notes, page, PageIcon}) => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    const isLoading = useSelector((state) => state.notes.currentNotes.isLoading)
    const [openedId, setOpenedId] = useState("")


    return (
        <div className='notes'>
            <header className='sticky-top'>
            <div className='header_title'>
            <PageIcon style={{
                    fontSize: '23px'
                }} className='header-icon' />
                <span className="header_title">{page}</span>
            </div>
               

                <div className="searchbar_container mx-5">
                <SearchBar />
                </div>
            </header>
            <Container fluid className='notes_con'>
                {
                    page === 'Private Notes' ?
                        <Row>
                            {
                                Notes.includes(note => note.creator._id === currentUser.userId && note.private && !isLoading) ?

                                <>
                                {
                                Notes.filter(note => note.creator._id === currentUser.userId && note.private === true).map((note) => {
                                    return (
                                        <Note openedId={openedId} setOpenedId={setOpenedId} note={note} currentUser={currentUser} dispatch={dispatch} largeSize="6" />
                                    )

                                })
                            }

                                </> : <h1 style={{
                                    fontSize: '18px',
                                    padding: '20px '
                                }}>You have not written any private note yet</h1>
                            }
                            
                        </Row> : <Row>

                            {
                                Notes.filter(note => note.private === false ).map((note) => {
                                    return (
                                        <Note openedId={openedId} setOpenedId={setOpenedId} note={note} currentUser={currentUser} dispatch={dispatch}  largeSize="6"/>
                                    )

                                })
                            }
                        </Row>
                }

            </Container>

            {/* <div className="note_card">
            <span className='note_card_title'>Title</span>
            <span className='note_card_author'>Name</span>
            <p>This is the book we should write in the morning and in the night</p>
            <span className="note_card_date">
                Date
            </span>  
          </div> */}
        </div>
    )
}

export default Notes