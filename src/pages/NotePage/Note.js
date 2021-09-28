import { Avatar } from '@material-ui/core'
import React from 'react'
import './NotePage.scss'
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory, useLocation } from 'react-router';

const Note = ({ note }) => {
    const history = useHistory()
    return (
        <div className="note_page">
            <div className="note_page_header">
            <ArrowBackIosIcon style={{
                margin: '10px 0px'
            }} 
                onClick={() => {
                    history.goBack()
                }}
            />
                <ul>
                    <li>
                        <AccountCircleIcon />
                        <span>{note.creator.name}</span>
                    </li>
                    <li>
                        <DateRangeIcon />
                        <span>{new Date(note.createdAt).toLocaleDateString('en-US')}</span>
                    </li>
                </ul>
            </div>
            <h6>
                {note.title}
            </h6>
                {note.content}
        </div>
    )
}



export default Note