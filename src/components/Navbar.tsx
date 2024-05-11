import React from 'react';
import { Container, Row, Col, Nav, Button, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavbarComponent = () => {
    return (
        <div className="container-fluid nvbr pt-4">
            <Container>
                <Row className="text-white d-flex justify-content-around justify-content-sm-between mb-lg-3">
                    <Col md={2} col={4}>
                        <h3 className='logo' id='home'>furniLux</h3>
                    </Col>
                    <Col md={7} className="lics my-auto d-none d-lg-block">
                        <Nav className='d-flex justify-content-around my-auto'>
                            <Nav.Link href="#home"  className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#product" className='text-white'>Categories</Nav.Link>
                            <Nav.Link href="#about" className='text-white'>About Us</Nav.Link>
                            <Nav.Link href="#blog" className='text-white'>Blogs</Nav.Link>
                            <Nav.Link href="#contact" className='text-white'>Contact Us</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={3} className="login my-auto d-none d-lg-block">
                    <Button style={{marginLeft:'100px'}} variant="outline-light" className='text-white'>Login</Button>
            <Button variant="outline-light" style={{ marginLeft: '20px' } } className='text-white'>Signup</Button> 
                    </Col>
                    <Col md={2} sm={2} className="menu d-lg-none position-relative">
                        <FontAwesomeIcon icon={faBars} className='fs-2' />
                        <Dropdown className="position-absolute ps-1 pt-1 p-2">
                            <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-white" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="#home">Home</Dropdown.Item>
                                <Dropdown.Item href="#product">Categories</Dropdown.Item>
                                <Dropdown.Item href="#about">About Us</Dropdown.Item>
                                <Dropdown.Item href="#blog">Blogs</Dropdown.Item>
                                <Dropdown.Item href="#contact">Contact Us</Dropdown.Item>
                                <Dropdown.Item href="#login">Login</Dropdown.Item>
                                <Dropdown.Item href="#signup">Sign Up</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NavbarComponent;
