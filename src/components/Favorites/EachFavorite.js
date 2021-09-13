import React from 'react'

import TimerIcon from '@material-ui/icons/Timer';
import { Col } from 'react-bootstrap'
import ClearIcon from '@material-ui/icons/Clear';


const EachFavorite = ({ note }) => {
    console.log(note)
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
               <span className="each_favorite-delete">
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