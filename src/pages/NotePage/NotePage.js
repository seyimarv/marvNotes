import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { fetchNote } from '../../services/notes';
import Note from './Note';
import WithLoading from '../../components/withLoading/withLoading';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar  from '../../components/Sidebar/Sidebar'
import './NotePage.scss'

const NotePage = (props) => {
    const [note, setNote] = useState({
        isLoading: true,
        note: {}
    })
    const currentUser = useSelector((state) => state.user.currentUser)
    const pathname = props.location.pathname
    const noteId = pathname.slice(6)
    const getNote = async () => {
        const fetchedNote = await fetchNote(currentUser.token, noteId)
        setNote({
            isLoading: false,
            note: fetchedNote.note
        })
    }

    useEffect(() => {
        getNote()

    }, [])


    

    return (
        <Container fluid className="note_page_con p-0">
            <Row>
                <Col lg={2} className="note_column sidebar-display">
                    <div className='position-fixed'>
                        <Sidebar path={props.location.pathname} history={props.history} />
                    </div>
                </Col>
                <Col lg={10}>
                    <WithLoading Component={Note} note={note.note} isLoading={note.isLoading} pathname={props.location.pathname} page='nonew' />
                </Col>

            </Row>

        </Container>
    )
}


export default NotePage