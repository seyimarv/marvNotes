import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from 'react-bootstrap'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { deleteNote, toggleLike } from '../../services/notes'
import './Notes.scss'
import ClickAway from '../notedropdown/notedropdown';
import Note from './Note';

const Notes = ({ Notes, page, PageIcon, token }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    const [openedId, setOpenedId] = useState("")


    return (
        <div className='notes'>
            <header className='sticky-top'>
                <PageIcon style={{
                    fontSize: '23px'
                }} className='header-icon' />
                <span className="header_title">{page}</span>
            </header>
            <Container fluid className='notes_con'>
                {
                    page === 'My Notes' ?
                        <Row>

                            {
                                Notes.filter(note => note.creator._id === currentUser.userId && note.private === true).map((note) => {
                                    return (
                                        <Note openedId={openedId} setOpenedId={setOpenedId} note={note} currentUser={currentUser} dispatch={dispatch} />
                                    )

                                })
                            }
                        </Row> : <Row>

                            {
                                Notes.map((note) => {
                                    return (
                                        <Note openedId={openedId} setOpenedId={setOpenedId} note={note} currentUser={currentUser} dispatch={dispatch} />
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