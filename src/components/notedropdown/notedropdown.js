import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './notedropdown.scss'
import { Animated } from "react-animated-css";
import { deleteNote, toggleLike } from '../../services/notes'
import { useDispatch } from 'react-redux';
import { editNote } from '../../redux/notes/notes.actions';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1,
    padding: '0px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ClickAway({openedId, note, noteCreatorId, currentUser, handleClickAway, openDropdown, handleClick }) {
  const dispatch = useDispatch()
  const classes = useStyles();
  const deleteEachNote = () => {
  
    deleteNote(currentUser.token, note._id, dispatch)
  
   
  }
  return (
    <div onClickAway={handleClickAway}>
      <div className={classes.root}>

        {openDropdown && openedId === note._id ? (
          <div className={classes.dropdown}>
            <Animated animationIn="fadeInDown" animationOut="fadeOut">
              <ul className='notedropdown_options'>

                  {
                  noteCreatorId === currentUser.userId ?
                    <li onClick={() => {
                  dispatch(editNote(note))
                }}> Edit </li>
                    : null
                }

                {
                  noteCreatorId === currentUser.userId ?
                    <li onClick={deleteEachNote}> Delete </li>
                    : null
                }

                {
                  !note.likes.includes(currentUser.userId) ? <li onClick={() => {
                    toggleLike(currentUser.token, note._id)
                  }}>Add to Favorites</li> : <li onClick={() => {
                    toggleLike(currentUser.token, note._id)
                  }}>Remove from Favorites</li>
                }
                
              </ul>
            </Animated>
          </div>
        ) : null}

      </div>
    </div>

  );
}

