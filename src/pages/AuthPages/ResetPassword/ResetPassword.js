import React from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import '../Auth.scss'
import Logo from '../../../assets/MarvnotesLogo.svg'
import { loginUser, resetPassword } from '../../../services/auth';
import {  useDispatch } from "react-redux";
import { Animated } from "react-animated-css";


const ResetPassword = (props) => {
    const dispatch = useDispatch()
    console.log(props)
    const token = props.match.params.token
    const history = props.history
    console.log(token)

   
    return (
        <Animated animationIn="fadeInLeft">
        <div className="auth-page">
            <div className="d-flex auth-logo">
                <img className="logo" src={Logo} alt="logo" />
                <h6 className="">MarvNotes</h6>
            </div>

            <section className="auth-page_first-section">
                <h6>Welcome</h6>
                <p>Login to continue</p>
                <Formik
                    initialValues={{ password: '', confirmPassword: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.password) {
                            errors.password = 'password is required'
                        } else if (values.password.length < 6) {
                            errors.password = 'Password should have at least 6 characters'
                        } else if(values.password !== values.confirmPassword) {
                            errors.confirmPassword = 'Password and confirm password should be matching'
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(async () => {
                        //  await loginUser(values, dispatch, path)
                        await resetPassword(values, token, history)
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
                                label='password'
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                error={errors.password}
                            />
                            {
                                errors.email ?
                                    <p className="auth-errormessage">
                                        {errors.password && touched.password && errors.password}
                                    </p> : null
                            }

                            <FormInput
                                label='confirm password'
                                type="password"
                                name="confirmPassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                error={errors.confirmPassword}
                            />
                            {
                                errors.password ?
                                    <p className="auth-errormessage">
                                        {errors.confirmPassword&& touched.confirmPassword && errors.confirmPassword}
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
        </div>
        </Animated>
    )
}

export default ResetPassword