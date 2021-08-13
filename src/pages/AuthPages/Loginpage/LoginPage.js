import React from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import './Loginpage.scss'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import '../Auth.scss'
import Logo from '../../../assets/MarvnotesLogo.svg'
import { loginUser } from '../../../services/auth';
import { connect, useDispatch } from "react-redux";
import { setCurrentUser } from '../../../redux/user/user.actions';

const LoginPage = () => {
     const dispatch = useDispatch()
    return (
        <>
            <div className="auth-page">
                <div className="d-flex auth-logo">
                    <img className="logo" src={Logo} alt="logo" />
                    <h6 className="">MarvNotes</h6>
                </div>

                <section className="auth-page_first-section">
                    <h6>Welcome</h6>
                    <p>Login to continue</p>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Email address is required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            } else if (!values.password) {
                                errors.password = 'password is required'
                            } else if (values.password.length < 6) {
                                errors.password = 'Password should have at least 6 characters'
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(async () => {
                             await loginUser(values, dispatch)
                            

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

                                <FormInput
                                    label='password'
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={errors.password}
                                />
                                {
                                    errors.password ?
                                        <p className="auth-errormessage">
                                            {errors.password && touched.password && errors.password}
                                        </p> : null
                                }

                                <div>
                                    <Button className="auth-button" type='submit' disabled={isSubmitting}>
                                        LOGIN
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Formik>

                </section>
                <section className="login-page_secondsection">
                    <p>
                        Forgot Password ?
                        <a href="dsd">Reset here</a>
                    </p>

                    <p>
                        I am new here, <a href="efe">Create new account</a>
                    </p>
                </section>
            </div>

        </>
    )
}


export default LoginPage