import React from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import { Formik } from 'formik';
import { Button } from 'react-bootstrap'
import Logo from '../../../assets/MarvnotesLogo.svg'
import { loginUser, signUpUser } from '../../../services/auth';
import { useDispatch } from "react-redux";
import { Animated } from "react-animated-css";
import { Link } from 'react-router-dom';
const SignupPage = () => {
   const dispatch = useDispatch()
    return (
        <Animated animationIn="fadeInLeft">
        <div className="auth-page">
            <div className="d-flex auth-logo">
                <img className="logo" src={Logo} alt="logo" />
                <h6 className="">MarvNotes</h6>
            </div>
            <section className="auth-page_first-section">

                <h6>We’re glad you want to join MarvNotes.</h6>
                <p>Create your Account</p>
       
            <Formik
                initialValues={{ email: '', password: '', confirmpassword: '', name: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'name is required'
                    } else if (values.name.length < 5 || values.name.length > 29) {
                        errors.name = 'name should have at least 5 characters, and less than 29 characters'
                    } else if (!values.email) {
                        errors.email = 'Email address is required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    } else if (!values.password) {
                        errors.password = 'password is required'
                    } else if (values.password.length < 6) {
                        errors.password = 'Password should have at least 6 characters'
                    } else if (values.confirmpassword !== values.password) {
                        errors.confirmpassword = 'confirm password and password should match'
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(async () => {
                      await signUpUser(values)
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
                            label="name"
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={errors.name}
                        />
                        {
                            errors.name ?
                                <p className="auth-errormessage">
                                    {errors.name  && errors.name}
                                </p> : null
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

                        <FormInput
                            label='confirm password'
                            type="password"
                            name="confirmpassword"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmpassword}
                            error={errors.confirmpassword}
                        />
                        {
                            errors.confirmpassword ?
                                <p className="auth-errormessage">
                                    {errors.confirmpassword && touched.confirmpassword && errors.confirmpassword}
                                </p> : null
                        }
                        <div>
                            <Button className='auth-button mt-5' type='submit' disabled={isSubmitting}>Sign Up</Button>
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
                Already have an account, <Link to="/Login">Login?</Link>
            </p>
            </section>
        </div>

        </Animated>
    )
}


export default SignupPage