import React from 'react'
import FormInput from '../../../components/Formiput/FormInput'
import { Button } from 'react-bootstrap'
import '../Auth.scss'
import Logo from '../../../assets/MarvnotesLogo.svg'

const ResetPassword = () => {
    return (
        <div className="auth-page">
            <section className="auth-page_first-section">
            <div className="d-flex auth-logo">
                    <img className="logo" src={Logo} alt="logo" />
                    <h6 className="">MarvNotes</h6>
                </div>

                <h6>Reset Password</h6>
                <p>Create a new password to access your account</p>
            </section>
            <FormInput label='Password' type="text" />
            <FormInput label='Confirm Password' type="text" />
            <div>
                <Button className='auth-button mt-5'>Reset Password</Button>
            </div>

        </div>
    )
}

export default ResetPassword