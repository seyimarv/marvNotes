import React from 'react'
import './FormInput.scss'

const FormInput = ({ label, type, error, ...otherProps}) => {

    return (
        <div className='inputgroup'>
            <input className={`formInput ${error ? 'inputError' : ''}`}
                type={type} {...otherProps} placeholder={label} />
        </div>
    )
}

export default FormInput