import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import { fetchCurrentNotes} from '../../redux/notes/notes.actions'
import { fetchNotes } from '../../services/notes'
import './All-notes.scss'
import WithLoading from '../../components/withLoading/withLoading'
import Allnotes from './All-notes'
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from '../../components/Sidebar/Sidebar'
import Writenote from '../../components/WriteNote/Writenote'
import EditNote from '../../components/WriteNote/EditNote'
import './All-notes.scss'
import PhoneFooter from '../../components/phonefooter/phonefooter'
import { Box, ClickAwayListener } from '@material-ui/core';


const AllnoteCon = (props) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.currentUser)
  const currentNotes = useSelector((state) => state.notes.currentNotes.notes)
  const isLoading = useSelector((state) => state.notes.currentNotes.isLoading)
  const writeNoteState = useSelector((state) => state.notes.writeNote)
  const editNoteState = useSelector((state) => state.notes.editNote)
  const [SidebarMobile, setSidebarMobile] = useState(false)
 





  const getNotes = async (pathname) => {
    dispatch(fetchCurrentNotes({ isLoading: true, notes: [] }))
    let notes;
    if (pathname == '/Private Notes') {
      notes = await fetchNotes(currentUser.token, true)
    } else if (pathname == '/Public Notes') {
      notes = await fetchNotes(currentUser.token, false)
    }
    setTimeout(() => {
      if (notes) {
        dispatch(fetchCurrentNotes({ isLoading: false, notes: notes.notes }))
      } else {
        dispatch(fetchCurrentNotes({ isLoading: false, notes: [] }))
      }

    }, 500)

  }









  useEffect(() => {
    getNotes(props.location.pathname)

  }, [props.location.pathname])



  return (
    <>
      <Container fluid className="all-notes_container p-0" fluid>
        <Row  className={`no-gutters ${SidebarMobile ? 'dull-page' : ''}`}>
          <Col lg={2} className="all-notes_colummn sidebar-display">
            <div className=''>
              <Sidebar path={props.location.pathname} history={props.history} />
            </div>
          </Col>
          <Col lg={6} className={`all-notes_column ${writeNoteState || editNoteState.editingNote === true ? 'nodisplayMobile' : ''}`}>
          {/* <header style={{
            border: '1px solid red',
          }}>
            me
          </header> */}
            <WithLoading Component={Allnotes} currentNotes={currentNotes} isLoading={isLoading} pathname={props.location.pathname}  history={props.history} />
          </Col>
          {
            props.location.pathname == '/My Notes' ?
              <Col lg={4} className='all-notes_column' >
                {
                  editNoteState.editingNote ? <EditNote note={editNoteState.note} privacy="true" />
                    :
                    <Writenote initialTitle='' initialContent='' privacy="true" />
                }

              </Col> :
              <Col lg={4} className='all-notes_column' >
                {
                  editNoteState.editingNote ? <EditNote note={editNoteState.note} privacy="false" />
                    :
                    <Writenote initialTitle='' initialContent='' privacy="false" />
                }

              </Col>
          }

        </Row>





      </Container>

    </>
  )
}


export default AllnoteCon