import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import './landingpage.scss'
import Noteimage from '../../assets/undraw_Notebook_re_id0r.svg'
import Landingpageheader from '../../components/landingpageheader/Landingpageheader'
import WritingNote from '../../assets/writingNotes.svg'
import ReadingNotes from '../../assets/ReadingNotes.svg'
import Quote from '../../assets/icons8_Quote_96px 1.svg'
import { Animated } from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div className="landing">

            <section className="landing_firstsection">
                <Landingpageheader />

                <Container fluid >
                    <div className="firstSection_background">

                    </div>
                    <div className="polygon">

                    </div>
                    <div className="polygon-2">
                    </div>
                    <div className="polygon-3">
                    </div>
                    <Row className="landing_firstsection_container">
                        <Col className="landing_firstsection_right col-6" xs={12} lg={6} md={6} sm={12}>
                            <Animated animationIn="fadeInLeft" >
                                <h4>
                                    Writing beautiful notes is a priority.
                                </h4>
                                <p>
                                    With a Marvienotes account, you can write and save your notes forever.
                                </p>
                            </Animated>
                            <Animated animationIn="fadeIn" >
                                <div className="button_container">
                                   <Link to='/Signup'>
                                   <Button style={{
                                        background: '#EF7B45',
                                        maxWidth: '200px',
                                        border: '1px solid #EF7B45'
                                    }}>
                                        Get started
                                    </Button>

                                   </Link> 
                                </div>
                            </Animated>
                        </Col>
                        <Col className="landing_firstsection_left" xs={12} lg={6} md={6} sm={12}>
                            <Animated animationIn="fadeInRight">
                                <img src={Noteimage} alt="Notebook">

                                </img>
                            </Animated>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Animated animateIn="fadeInUp">
                <section className="landing_secondsection">

                    <Container fluid>
                        <Row className="landing_secondsection_container">
                            <div className="landing_secondsection_left order-last order-lg-first order-md-first" lg={7} md={7} xs={12}>
                                <div className="boxes_background">

                                </div>
                                <Row className="landingsecondsection_box_container">
                                    <Col xs={6}>
                                        <div className="landingsecondsection_boxes" style={{
                                            background: '#FFF2F2'
                                        }}>
                                            <h4>
                                                1
                                            </h4>
                                            <p style={{
                                                color: '#610000'
                                            }}>
                                                Sign up for a Marvienotes account.
                                            </p>
                                        </div>
                                        <div className="landingsecondsection_boxes" style={{
                                            background: '#F6E7FF'
                                        }}>
                                            <h4>
                                                2
                                            </h4>
                                            <p style={{
                                                color: '#5D036B'
                                            }}>
                                                Login into your account
                                            </p>
                                        </div>

                                    </Col>
                                    <Col className='mt-5' xs={6}>
                                        <div className="landingsecondsection_boxes" style={{
                                            background: '#FFF4EB'
                                        }}>
                                            <h4>
                                                3
                                            </h4>
                                            <p style={{
                                                color: '#7C3800'
                                            }}>
                                                Start writing and save your notes.
                                            </p>
                                        </div>
                                        <div className="landingsecondsection_boxes" style={{
                                            background: '#EBFFFA'
                                        }}>
                                            <h4>
                                                4
                                            </h4>
                                            <p style={{
                                                color: '#003F30'
                                            }}>
                                                Read your notes, edit and delete if you want.
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                            <Col className="landing_secondsection_right order-first order-lg-last" lg={4} xs={12} md={4}>

                                <h4>
                                    How It Works
                                </h4>

                                <p>
                                   Sign up easily for your MarviesNote account, and start writing right away. No charges! No hidden fees!
                                </p>

                            </Col>
                        </Row>
                    </Container>


                </section>
            </Animated>
            <section className="landing_thirdsection">
                <Row className='landing_thirdsection_row'>
                    <Col className="landing_thirdsection_textcol landing_thirdsection_right" xs={12} lg={6} md={6}>
                        <ScrollAnimation animateIn="fadeInUp" className="landing_thirdsection_textcol landing_thirdsection_right">
                            <h6>
                                Do You Know ...
                            </h6>
                            <p>
                                Thousands of users across the world would be happy to read your words.
                            </p>
                        </ScrollAnimation>
                    </Col>
                    <Col>
                        <ScrollAnimation animateIn="fadeIn" >
                            <img src={WritingNote} alt="Writing Notes" />
                        </ScrollAnimation>

                    </Col>
                </Row>
                <Row className='landing_thirdsection_row'>
                    <Col>
                        <ScrollAnimation animateIn="fadeIn" >
                            <img src={ReadingNotes} alt="Reading notes" />
                        </ScrollAnimation>
                    </Col>
                    <Col className="landing_thirdsection_textcol landing_thirdsection_left" xs={12} lg={6} md={6}>
                        <ScrollAnimation animateIn="fadeInUp" className="landing_thirdsection_textcol landing_thirdsection_left" >
                            <h6 style={{ fontStyle: "italic"}}>
                               "Writing is the best way to talk
                               without being interrupted." - Jules Renard
                            </h6>
                            <p>
                                Write and share your thoughts with everyone today by creating an account with Marvienotes.
                            </p>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </section>
            <section className="landing_fourthsection">
                <div className="landing_fourthsection_text">
                    <ScrollAnimation animateIn="fadeIn" >
                        <h6>
                            Writing Made Easy For Everyone.
                        </h6>
                        <p>
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Marvienotes is right for you.
                        </p>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeIn" >
                    <div className="landing_fourthsection_box">

                        <div>
                            <img src={Quote} alt="" />
                        </div>
                        <p>
                            Using MarvieNotes has helped me to write, save and organize my notes easily. Now, I have no fear of losing them.
                        </p>
                        <h6>
                            Oyewo Oluwaseyitan - Student, Obafemi Awolowo University.
                        </h6>
                    </div>
                </ScrollAnimation>
            </section>
            <section className="landing_fifthsection">
                <ScrollAnimation animateIn="fadeIn" className="landing_fifthsection">
                    <h6>
                        Start Writing
                    </h6>
                    <p>
                        Write, Save and Share your thoughts today with Marvienotes account.
                        We’d love to help you organize your thoughts.
                    </p>
                    <Link to='/Signup'>
                        <Button style={{
                            background: '#EF7B45',
                            maxWidth: '200px',
                            border: '1px solid #EF7B45'
                        }}>
                            Get started
                        </Button>

                    </Link>
                </ScrollAnimation>
            </section>

            <footer>

                <p>Built By Oyewo Oluwaseyitan <span>©</span> 2020 </p>

            </footer>


        </div>
    )
}


export default LandingPage