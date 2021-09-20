import React, { useState } from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import Logo from '../../../assets/MarvnotesLogo.svg'
import { connect, useDispatch } from "react-redux";
import { forgotPassword } from '../../../services/auth';
import '../Auth.scss'
import { Link } from 'react-router-dom';
import DraftsIcon from '@material-ui/icons/Drafts';
const ForgotPassword = () => {
    const dispatch = useDispatch()
    const [emailSent, setEmailSent] = useState(false)
    return (

        <div className="auth-page mx-4">
            <div className="d-flex auth-logo">
                <img className="logo" src={Logo} alt="logo" />
                <h6 className="">MarvNotes</h6>
            </div>

            <section className="auth-page_first-section">

                {
                    emailSent ?
                        <div className="email_sent">
                          <DraftsIcon />
                            <h6 style={{
                                fontWeight: '600'
                            }}>
                                Check Your Mail
                            </h6>
                            <p>We have sent password recover instructions to your email</p>
                        </div> : <>
                            <h6>Recover my Login details</h6>
                            <p>Please enter your email address to reset account details</p>

                            <Formik
                                initialValues={{ email: '', emailSent: false }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = 'Email address is required';
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = 'Invalid email address';
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                    setTimeout(async () => {
                                        await forgotPassword(values, dispatch, setEmailSent)
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


                                        <FormInput
                                            label='Email address'
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            error={errors.email}
                                        />
                                        {
                                            errors.email ?
                                                <p className="auth-errormessage">
                                                    {errors.email && touched.email && errors.email}
                                                </p> : null
                                        }

                                        <div>
                                            <Button className="auth-button" type='submit' disabled={isSubmitting}>
                                                Reset
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>

                            <p className="mt-5" style={{
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: "12px",
                                lineHeight: "21px",
                                color: "#000000"
                            }}>
                                I can't remember my details, <Link to="/Signup">Create new account</Link>
                            </p>
                        </>

                }


            </section>
        </div>

    )
}


export default ForgotPassword