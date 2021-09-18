import React from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import Logo from '../../../assets/MarvnotesLogo.svg'
import { connect, useDispatch } from "react-redux";
import { forgotPassword } from '../../../services/auth';
const ForgotPassword = () => {
    const dispatch = useDispatch()
    return (
      
            <div className="auth-page">
                <div className="d-flex auth-logo">
                    <img className="logo" src={Logo} alt="logo" />
                    <h6 className="">MarvNotes</h6>
                </div>

                <section className="auth-page_first-section">
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
                                await forgotPassword(values, dispatch)
                                values.emailSent = true
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

                                {
                                    values.emailSent ?
                                        <h1>An email has been sent to you, please check your messages</h1> :
                                        null
                                }

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
                </section>

                <p className="mt-5" style={{
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "12px",
                    lineHeight: "21px",
                    color: "#000000"
                }}>
                    I can't remember my details, <a href="efe">Create new account</a>
                </p>
            </div>
   
            )
}


            export default ForgotPassword