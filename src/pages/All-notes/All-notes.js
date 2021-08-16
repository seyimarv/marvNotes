import React from 'react'
import { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Notes from '../../components/Notes/Notes'
import { useSelector } from "react-redux";
import Sidebar from '../../components/Sidebar/Sidebar'
import Writenote from '../../components/WriteNote/Writenote'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { fetchCurrentNotes } from '../../redux/notes/notes.actions'
import { fetchNotes } from '../../services/notes'
import './All-notes.scss'


const Allnotes = (props) => {
    console.log(props.location.pathname)
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.user.currentUser)
    const currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    const getNotes = async () => {
        const notes = await fetchNotes(currentUser.token)
        console.log(notes)
        dispatch(fetchCurrentNotes({isLoading: false, notes: notes.notes}))
       
    }
    useEffect(() => {
        getNotes()
    }, [])
    console.log(currentNotes)
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
                        <Notes Notes={currentNotes} page='All notes' PageIcon={LibraryBooksIcon}/>
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