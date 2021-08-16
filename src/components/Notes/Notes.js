import { CreateRounded } from '@material-ui/icons'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Notes.scss'

const Notes = ({ Notes, page, PageIcon }) => {
    console.log(Notes)
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
                            <span className="note_card_date">
                                {new Date(note.createdAt).toLocaleDateString('en-US')}
                            </span>
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