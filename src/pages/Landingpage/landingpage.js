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
                                    Writing beautiful notes is a priority
                                </h4>
                                <p>
                                    With a marvienotes account, you can write and save your beautiful notes
                                </p>
                            </Animated>
                            <Animated animationIn="fadeIn" >
                                <div className="button_container">
                                    <Button style={{
                                        background: '#EF7B45',
                                        maxWidth: '200px',
                                        border: '1px solid #EF7B45'
                                    }}>
                                        Get started
                                    </Button>
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
                                                Sign up for a marvienotes account
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
                                                Start writing and save your notes
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
                                                Read your notes, edit and delete if you want
                                            </p>
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                            <Col className="landing_secondsection_right order-first order-lg-last" lg={4} xs={12} md={4}>

                                <h4>
                                    How it works
                                </h4>

                                <p>
                                    With the right mindset you can easily grow your savings, simply follow our 5 easy steps and your money will work as hard as you do.
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
                                Always make sure you
                                spend on priorities
                            </h6>
                            <p>
                                Spending can be trivial when you have money in your pocket.
                                Use our budgeting tool to plan your expenses so that you don’t spend on trivialities.
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
                            <h6>
                                Set your goals and save
                                toward it automatically
                            </h6>
                            <p>
                                You may not see it today but we want you to look back in a few years and be awed by how every little of your savings added up and brought you where you wanted to be. Use our youth friendly accounts to track your savings as it grow bit-by-bit.
                            </p>
                        </ScrollAnimation>
                    </Col>
                </Row>
            </section>
            <section className="landing_fourthsection">
                <div className="landing_fourthsection_text">
                    <ScrollAnimation animateIn="fadeIn" >
                        <h6>
                            The habit of saving is an education
                        </h6>
                        <p>
                            Be inspired! let our success stories guide you
                        </p>
                    </ScrollAnimation>
                </div>
                <ScrollAnimation animateIn="fadeIn" >
                <div className="landing_fourthsection_box">
                
                    <div>
                        <img src={Quote} alt="" />
                    </div>
                    <p>
                        Using MarvNotes has really helped me in
                        achieving my dreams in the most unexpected way.
                    </p>
                    <h6>
                        Oyewo oluwaseyitan, Student, Obafemi awolowo university
                    </h6>
                </div>
                </ScrollAnimation>
            </section>
            <section className="landing_fifthsection">
            <ScrollAnimation animateIn="fadeIn"  className="landing_fifthsection">
                <h6>
                    Start Writing
                </h6>
                <p>
                    Budgeting, saving and earning with one ChipTranz account.
                    We’d love to help you take control over your money.
                </p>
                <Button style={{
                    background: '#EF7B45',
                    maxWidth: '200px',
                    border: '1px solid #EF7B45'
                }}>
                    Get started
                </Button>
                </ScrollAnimation>
            </section>
           
            <footer>
          
                <p>Built By Oyewo Oluwaseyitan <span>©</span> 2020 </p>
                
            </footer>
           

        </div>
    )
}


export default LandingPage