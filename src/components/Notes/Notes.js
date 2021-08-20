import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Button } from 'react-bootstrap'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { deleteNote, toggleLike } from '../../services/notes'
import './Notes.scss'

const Notes = ({ Notes, page, PageIcon, token }) => { 
    const dispatch = useDispatch()
  
    return (
        <div className='notes'>
            <header className='d-flex'>
                <PageIcon style={{
                    fontSize: '23px'
                }} />
                <span className="header_title">{page}</span>
            </header>
            <Container fluid>
                <Row>

                    {
                        Notes.map((note) => {
                            return (
                                <Col lg={6} className="note_card_column" key={note._id}>
                                    <div className="note_card">
                                        <span className='note_card_title'>{note.title}</span>
                                        <span className='note_card_author'>{note.creator.name}</span>
                                        <p>{note.content}</p>
                                        <div className='note-footer'>                           
                                            <span className="note_card_date">
                                                {new Date(note.createdAt).toLocaleDateString('en-US')}
                                            </span>
                                            <div>
                                            <ThumbUpIcon className={`note-like_icon ${note.likes.length ? 'note_liked' : ''}`} onClick={() =>
                                                toggleLike(token, note._id)
                                            } />
                                            <span className='note-likes' >{note.likes.length}</span>
                                            </div>
                                            <DeleteIcon className='note-delete_icon' onClick={() =>
                                                deleteNote(token, note._id, dispatch)
                                            } />
                                        </div>
                                    </div>
                                </Col>

                            )

                        })
                    }
                </Row>
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