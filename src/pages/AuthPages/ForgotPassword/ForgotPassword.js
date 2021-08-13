import React from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import { Button } from 'react-bootstrap'
import Logo from '../../../assets/MarvnotesLogo.svg'

const ForgotPassword = () => {
    return (
        <div className="auth-page">
            <section className="auth-page_first-section">
                <div className="d-flex auth-logo">
                    <img className="logo" src={Logo} alt="logo" />
                    <h6 className="">MarvNotes</h6>
                </div>

             
                <h6>Recover my Login details</h6>
                <p>Please enter your email address to reset account details</p>
            </section>
            <FormInput label='Email address' type="text" />
            <div>
                <Button className='auth-button mt-5'>Reset Password</Button>
            </div>
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