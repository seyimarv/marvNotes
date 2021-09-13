import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Favorites from '../../components/Favorites/Favorites'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Favoritespage.scss'
import {  getFavorites, updateNote, fetchCurrentNotes} from '../../redux/notes/notes.actions'
import{ socket} from '../../services/socket'
import { useDispatch } from 'react-redux'
import { fetchNotes } from '../../services/notes'
import { Favorite } from '@material-ui/icons'
import WithLoading from '../../components/withLoading/withLoading'



const Favoritespage = (props) => {
    const favorites = useSelector((state) => state.notes.Favorites)
    const currentUser = useSelector((state) => state.user.currentUser)
    const currentNotes = useSelector((state) => state.notes.currentNotes.notes)
    const isLoading = useSelector((state) => state.notes.Favorites.isLoading)
   
    const dispatch = useDispatch()

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
      
      const getNotes = async () => {
        // dispatch(getFavorites({ isLoading: true, notes: [] }))
         const notes = await fetchNotes(currentUser.token, 'favorites')
    
        setTimeout(() => {
          if(notes) {
            dispatch(fetchCurrentNotes({  notes: notes.notes }))
            dispatch(getFavorites({...notes, currentUser}))
           
          } else {
            dispatch(fetchCurrentNotes({ notes: []}))
            dispatch(getFavorites({notes:[], currentUser})) 
          }
        
          
        }, 500)
    
      }
    useEffect(() => {
       getNotes()
    
        socket.on('notes', data => {
            if (data.action === 'like') {
                const updatedNotes =  getUpdateNote(data.note)
                dispatch(updateNote(updatedNotes))
            }
          })
    }, [])
    
    return (
        <>
            <Container className="favorites_container" fluid>
                <Row>
                    <Col lg={2} className="favorites_column sidebar-display">
                        <div className='position-fixed'>
                            <Sidebar path={props.location.pathname} history={props.history} />
                        </div>
                    </Col>
                    <Col lg={10} className="favorites_column">
                    <WithLoading Component={Favorites} favorites={favorites} isLoading={isLoading} pathname={props.location.pathname} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Favoritespage