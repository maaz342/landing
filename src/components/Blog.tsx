import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import sampleImage from '../public/cartonbed.jpg'; // Import your image here
import second from '../public/shelf.jpg';
import third from '../public/sofa.jpg';

const BlogCard = () => {
    return (
        <Container>
            <h1 style={{textAlign:'center'}}>
                Blogs
            </h1>
            <Row>
                <Col md={4}>
                    <Card style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', height: '100%' }}>
                        <div style={{ position: 'relative', height: '100%' }}>
                            <Card.Img variant="top" src={sampleImage} alt="Sample" style={{ height: '100%' }} />
                            <div style={{ position: 'absolute', bottom: '0', right: '0', padding: '1rem', backgroundColor: 'gray',width: '50%' }}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni consectetur esse nemo dicta velit quia cumque atque dignissimos impedit obcaecati?</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', height: '100%' }}>
                        <div style={{ position: 'relative', height: '100%' }}>
                            <Card.Img variant="top" src={second} alt="Sample" style={{ height: '100%' }} />
                            <div style={{marginTop:'100px', position: 'absolute', bottom: '0', right: '0', padding: '1rem', backgroundColor: 'gray', width: '50%' }}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni consectetur esse nemo dicta velit quia cumque atque dignissimos impedit obcaecati?</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', height: '100%' }}>
                        <div style={{ position: 'relative', height: '100%' }}>
                            <Card.Img variant="top" src={third} alt="Sample" style={{ height: '100%' }} />
                            <div style={{ position: 'absolute', bottom: '0', right: '0', padding: '1rem', backgroundColor: 'gray', width: '50%' }}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni consectetur esse nemo dicta velit quia cumque atque dignissimos impedit obcaecati?</p>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogCard;


