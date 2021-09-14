import React from 'react'
import { toggleLike } from '../../services/notes'
import TimerIcon from '@material-ui/icons/Timer';
import { Col } from 'react-bootstrap'
import ClearIcon from '@material-ui/icons/Clear';
import { useSelector } from 'react-redux'
import {removeFromFavorites} from '../../redux/notes/notes.actions'
import { useDispatch } from 'react-redux'

const EachFavorite = ({ note }) => {
    const favorites = useSelector((state) => state.notes.Favorites.notes)
    const currentUser = useSelector((state) => state.user.currentUser)
     const dispatch = useDispatch()
    const removeFavorite = (note) => {
        toggleLike(currentUser.token, note._id)
        dispatch(removeFromFavorites({favorites, note}))
    }
       
    return (
           <Col lg={4} key={note._id}>
            <div className="each_favorite">
                <span className="each_favorite-title">{note.title}</span>
                <p>{note.content}</p>
           <div>
            <div className="each_favorite-footer d-flex">
               <span className='each_favorate-time w-75'>
               <TimerIcon className='each_favorite-footer-timer-icon'/>
               {new Date(note.createdAt).toLocaleDateString('en-US')}
               </span>
               <span className="each_favorite-delete" onClick={() => {
                   removeFavorite(note)
               }}>
               <ClearIcon className='each_favorite-footer-timer-icon'/>
                Remove
               </span>
            </div>
            </div>
            </div>
            </Col>

      
    )
}

export default EachFavorite