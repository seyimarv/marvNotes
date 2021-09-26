import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Favorites from '../../components/Favorites/Favorites'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Favoritespage.scss'
import { getFavorites, fetchCurrentNotes } from '../../redux/notes/notes.actions'
import PhoneFooter from '../../components/phonefooter/phonefooter'
import { useDispatch } from 'react-redux'
import { fetchNotes } from '../../services/notes'
import WithLoading from '../../components/withLoading/withLoading'
import { Box, ClickAwayListener } from '@material-ui/core';
import '../All-notes/All-notes.scss'



const Favoritespage = (props) => {
  const favorites = useSelector((state) => state.notes.Favorites)
  const currentUser = useSelector((state) => state.user.currentUser)
  const currentNotes = useSelector((state) => state.notes.currentNotes.notes)
  const isLoading = useSelector((state) => state.notes.Favorites.isLoading)

 





  const dispatch = useDispatch()

  const getNotes = async () => {
    const notes = await fetchNotes(currentUser.token, 'favorites')

    setTimeout(() => {
      if (notes) {
        dispatch(fetchCurrentNotes({ notes: notes.notes }))
        dispatch(getFavorites({ ...notes, currentUser }))

      } else {
        dispatch(fetchCurrentNotes({ notes: [] }))
        dispatch(getFavorites({ notes: [], currentUser }))
      }


    }, 500)

  }
  useEffect(() => {
    getNotes()

  }, [])

  return (
    <>
      <Container className="favorites_container" fluid>
        <Row>
          <Col lg={2} className="favorites_column sidebar-display">
           
              <Sidebar path={props.location.pathname} history={props.history} />
         
          </Col>
          <Col lg={10} className="favorites_column p-0">
            <WithLoading Component={Favorites} favorites={favorites} isLoading={isLoading} pathname={props.location.pathname} page="nonew"/>
          </Col>
        </Row>
      </Container>
     
    </>
  )
}


export default Favoritespage