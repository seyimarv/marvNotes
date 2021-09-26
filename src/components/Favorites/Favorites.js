import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import EachFavorite from './EachFavorite'
import './Favorites.scss'
import StarsIcon from '@material-ui/icons/Stars';


const Favorites = () => {
    const favorites = useSelector((state) => state.notes.Favorites.notes)
    return (



        <div className='favorites'>
            <header className='sticky-top'>
                <StarsIcon style={{
                    fontSize: '23px',
                    margin: '0px 3px'
                }} className='favorites_header-icon' />
                <span className="favorites_header_title">Favorites</span>
            </header>
       <Container fluid className='favorites_con p-0'>
         {
             favorites.length ?  <Row className='mx-3'>
                {
                    favorites.map(note => {
                        return (

                            <EachFavorite key={note._id} note={note} />

                        )
                    })
                }
            </Row> : <h1>You have not added any note to your favorites</h1>
         }
           
        </Container>
        </div>
    )

}

export default Favorites