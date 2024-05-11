import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import '../style/Footer.css'

const Footer = () => {
    return (
        <div className="bg mb-2">
            <Container id='about'>
                <Row>
                    <Col lg={4} md={6} className="text-white mt-5">
                        <h2>furniLux</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eligendi!</p>
                        <div className='mt-4 fot'>
                            <FontAwesomeIcon icon={faPhone} className='me-3' />
                            +92381765733
                        </div>
                        <div className='fot'>
                            <FontAwesomeIcon icon={faEnvelope} className='me-3' />
                            furnilux@gmail.com
                        </div>
                        <div className='fot'>
                            <FontAwesomeIcon icon={faLocationDot} className='me-3' />
                            123 site #65 street region, united state
                        </div>
                    </Col>
                    <Col lg={2} col={6} className="text-white mt-5">
                        <h4>About Us</h4>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">About Us</a>
                        </div>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Contact Us</a>
                        </div>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Blogs</a>
                        </div>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Popular Questions</a>
                        </div>
                    </Col>
                    <Col lg={2} col={6} className="text-white mt-5">
                        <h4>What's Popular</h4>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Decorative Lap</a>
                        </div>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Luxury Bed</a>
                        </div>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Soft Sofa</a>
                        </div>
                        <div className='arrow'>
                            <FontAwesomeIcon icon={faArrowUp} className='arow me-3' />
                            <a href="#">Wodden Shelf</a>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className="text-white mt-5 text-center text-lg-start">
                        <h4>Get 50% off your first Order</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat expedita soluta suscipit.</p>
                        <div className='border subinpt px-md-2 border-2 rounded-5 mt-5 mb-5'>
                            <input type="text" placeholder='Email Address..' className='py-2' />
                            <button className='py-1 px-2 border-0 rounded-5'>Subscribe</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
