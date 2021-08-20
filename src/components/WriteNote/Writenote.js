import React from "react"

import './writenote.scss'

import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import { TextareaAutosize } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../services/notes";


const Writenote = () => {
    const userToken = useSelector((state) => state.user.currentUser.token)
    const dispatch = useDispatch()
    return (
        <div className="write-note">

            <Formik
                initialValues={{ title: '', content: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        console.log('')

                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
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

                        <div style={{
                            overflowY: 'scroll',
                            height: '80vh',
                           
                        }}>
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