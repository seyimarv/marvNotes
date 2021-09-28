import React from "react"

import './writenote.scss'

import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import { TextareaAutosize } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "../../services/notes";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { editNote } from "../../redux/notes/notes.actions";
import { useHistory } from 'react-router';

const Writenote = ({ privacy, initialTitle, initialContent, id , editing }) => {
    const userToken = useSelector((state) => state.user.currentUser.token)
    const dispatch = useDispatch()
    const writeNoteState = useSelector((state => state.notes.writeNote))
    const editNoteState = useSelector((state => state.notes.editNote))
    const history = useHistory()

    return (
        <div className={`write-note `}>

            <Formik
                initialValues={{ title: initialTitle, content: initialContent , privacy: privacy }}
                validate={values => {
                    const errors = {};


                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    let notePrivacy
                    
                    if(editNoteState.editingNote || editing) {
                        setTimeout(async () => {
                        if (!values.title) {
                            values.title = "No title"
                        }
                        if (!values.content) {
                            values.content = ""
                        }
                       
                      const noteData =  await updateNote(values, userToken, id, dispatch)
                      if(noteData) {
                          notePrivacy = noteData.note.private
                      } 
                      if(editNoteState.editingNote) {
                        dispatch(editNote({
         note: null,
         editNoteState: false
     }))
                      }
                      if (notePrivacy) {
                        history.push('/Private Notes')
                       } else {
                           history.push('/Public Notes')
                       }
                        setSubmitting(false);
                        
                    }, 100);
                    } else {
                        setTimeout(async () => {
                        if (!values.title) {
                            values.title = "No title"
                        }
                        if (!values.content) {
                            values.content = ""
                        }
                      
                       const noteData = await addNote(values, userToken, dispatch)
                       if (noteData.note.private) {
                        history.push('/Private Notes')
                       } else {
                           history.push('/Public Notes')
                       }
                        setSubmitting(false);
                      
                        

                    }, 100);
                    }
                  
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (

                    <form onSubmit={handleSubmit}>
                        <div className="write-note_privacy">
                        <ArrowBackIosIcon className='back-arrow' onClick={() => {
                              history.goBack()
                        }}/>
                            <label htmlFor="privacy">Choose who can see this note</label>
                            {
                                values.privacy ?
                                <select name="privacy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.privacy}
                                    error={errors.privacy}>
                                     <option value="false">Everyone</option>
                                    <option value="true">Only you</option>
                                   
                                </select> : <select name="privacy"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.privacy}
                                    error={errors.privacy}>
                                    <option value="true">Only you</option>
                                    <option value="false">Everyone</option>
                                </select>
                            }

                        </div>
                        <div className='write-note_con pl-3'>
                            <TextareaAutosize className='write-note_title'
                                placeholder="Title"
                                type="text"
                                name="title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                error={errors.title}
                                maxLength="250"

                            />
                            {
                                errors.title ?
                                    <p className="write-note_errormessage">
                                        {errors.title && touched.title && errors.title}
                                    </p> : null
                            }

                            <TextareaAutosize
                                className="write-note_content"
                                placeholder='Write the content of your note here.'
                                type="content"
                                name="content"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                                error={errors.content}
                            />
                            {
                                errors.content ?
                                    <p className="write-note_errormessage">
                                        {errors.title && touched.title && errors.title}
                                    </p> : null
                            }

                        </div>
                        <Button className="write-note_button" type='submit' disabled={isSubmitting}>
                            Post
                        </Button>
                    </form>
                )}
            </Formik>

        </div>

    )
}


export default Writenote