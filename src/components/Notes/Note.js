import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Col } from 'react-bootstrap'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { deleteNote, toggleLike } from '../../services/notes'
import './Notes.scss'
import ClickAway from '../notedropdown/notedropdown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import './note.scss'



const Note = ({ note, currentUser, openedId, setOpenedId, largeSize }) => {

    const [open, setOpen] = React.useState(false);

    const handleClick = (id) => {
        setOpen((prev) => !prev);
        setOpenedId(id)
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <Col lg={largeSize} xs={6}
        className="note_card_column" key={note._id}>
            <div className="note_card">
                <span className='note_card_author mt-3' onClick={handleClick}>{note.creator.name}</span>
                <span className='note_card_title'>
                    {/* <LensSharpIcon /> */}

                    {note.title}</span>

                <div className='note-options_toggle'>
                    <MoreHorizIcon onClick={() => {
                        handleClick(note._id)
                    }
                    } />
                </div>

                <ClickAway handleClickAway={handleClickAway}
                    openDropdown={open}
                    currentUser={currentUser}
                    noteCreatorId={note.creator._id}
                    note={note}
                    openedId={openedId}
                />
                <span className="note_card_content">{note.content}</span>
                <div className='note-footer'>
                    <div className='note-footer_contents'>
                        <span className="note_card_date">
                            {new Date(note.createdAt).toLocaleDateString('en-US')}
                        </span>

                    </div>
                </div>
                <Link to={`/Note/${note._id}`}>
                    <VisibilityIcon className='note-page_view' />
                </Link>
            </div>
        </Col>
    )
}

export default Note