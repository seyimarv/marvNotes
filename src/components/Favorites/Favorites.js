import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import EachFavorite from './EachFavorite'
import './Favorites.scss'
import StarsIcon from '@material-ui/icons/Stars';

const Favorites = () => {
    // const currentUser = useSelector((state) => state.user.currentUser)
    const favorites = useSelector((state) => state.notes.Favorites.notes)
    console.log(favorites)
    return (

        <div className='favorites'>
            <header className='sticky-top'>
                <StarsIcon style={{
                    fontSize: '23px',
                    margin: '0px 3px'
                }} className='favorites_header-icon' />
                <span className="favorites_header_title">Favorites</span>
            </header>
       <Container fluid className='favorites_con'>
            <Row>
                {
                    favorites.map(note => {
                        return (

                            <EachFavorite key={note._id} note={note} />

                        )
                    })
                }
            </Row>
        </Container>
        </div>
    )

}

export default Favorites