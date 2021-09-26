import React from "react"

import './writenote.scss'

import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import { TextareaAutosize } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "../../services/notes";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { writeNote } from "../../redux/notes/notes.actions";

const Writenote = ({ privacy, initialTitle, initialContent, id, editing }) => {
    const userToken = useSelector((state) => state.user.currentUser.token)
    const dispatch = useDispatch()
    const writeNoteState = useSelector((state => state.notes.writeNote))
    const editNoteState = useSelector((state => state.notes.editNote))
  
    return (
        <div className={`write-note ${writeNoteState || editNoteState.editingNote? 'displayWritenoteMobile' : ''} `}>

            <Formik
                initialValues={{ title: initialTitle, content: initialContent , privacy: privacy }}
                validate={values => {
                    const errors = {};


                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    if(editNoteState.editingNote) {
                        setTimeout(async () => {
                        if (!values.title) {
                            values.title = "No title"
                        }
                        if (!values.content) {
                            values.content = ""
                        }
                    
                        await updateNote(values, userToken, id, dispatch)
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
                      
                        await addNote(values, userToken, dispatch)
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
                        <div className='write-note_con'>
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
                        <ArrowBackIosIcon className='back-arrow' onClick={() => {
                            dispatch(writeNote())
                        }}/>
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