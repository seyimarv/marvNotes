import { Avatar } from '@material-ui/core'
import React from 'react'
import './NotePage.scss'
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Note = ({ note }) => {
    return (
        <div className="note_page">
            <div className="note_page_header">
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