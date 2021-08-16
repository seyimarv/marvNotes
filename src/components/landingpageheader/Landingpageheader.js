import React from 'react'
import './landingpageheader.scss'
import NavIcon from '../../assets/icons8-menu.svg'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import Logo from '../../assets/MarvnotesLogo.svg'
import { Link } from 'react-router-dom'


const Landingpageheader = () => {
    const [mobileNav, setMobileNav] = useState(false)

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav)

    }
    console.log(mobileNav)

    return (
        <>
            <header className='main-header'>

                <nav>
                    <ul>
                        <li className="main-header_logo">
                           
                            <h6>MarvNotes</h6>
                        </li>
                        <li className="main_header_item">
                            <a>Home</a>
                        </li>
                        <li className="main_header_item">
                            <Link to='/Signup'>Signup</Link>
                        </li>
                        <li className="main_header_item">
                            <Link to='/Login'>Login</Link>
                        </li>
                        <li className="main_header_last-item">
                            <a>
                                <span>©</span>
                                Seyimarv</a>
                        </li>
                        <li onClick={() => toggleMobileNav()}><img src={NavIcon} alt="nav-icon" className="mobile-nav_icon" 
                        /></li>

                    </ul>
                </nav>
            </header>
            <Button className="mobile-nav_button" style={{
                position: 'absolute',
                top: '15px',
                right: '120px',
                background: '#424CA0',
                border: '1px solid white',
                height: '30px',
                padding: '3px 8px',
                fontSize: '13px'
            }}>Sign Up</Button>
       
                        <nav className={`mobile-nav ${mobileNav ? 'mobile-nav_open' : ''}`}>
                            <ul>
                                <li>
                                    <a>Home</a>
                                </li>
                                <li>
                                    <Link to='/login'>Log In</Link>
                                </li>
                                <li className="mobile-nav_last-item">
                                    <a>
                                        <span>©</span>
                                        Seyimarv</a>
                                </li>
                            </ul>
                        </nav> 

          

        </>
    )
}

export default Landingpageheader