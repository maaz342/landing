import React from 'react';
import { Carousel,Container,Col,Row } from 'react-bootstrap';
import backgroundImage from '../public/images.jpg';
import bed from '../public/cartonbed.jpg'
import shelf from '../public/shelf1.jpg'
import dressor from '../public/dressor.jpg'

const Slider = () => {
    return (
        <Container fluid  style={{backgroundColor:'gray',height:'300px'}}>
        <Row style={{ height: '100%' }}>
            <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={backgroundImage} alt="" />
                </Col>                    
                <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <Carousel style={{ width: '100%' }}>
                    <Carousel.Item>

                <p style={{ textAlign: 'center', color: 'white' }}>
                <img src={shelf} height={'100px'} alt="" style={{ display: 'block', margin: 'auto' }}  />

Book Shelf                 
</p>
<p style={{ textAlign: 'center', color: 'white',marginBottom:'40px' }}>
    $80
</p>



                </Carousel.Item>
                <Carousel.Item>
                <p style={{ textAlign: 'center', color: 'white' }}>
                    <img src={bed} height={'100px'} alt="" style={{ display: 'block', margin: 'auto' }}/>
                    Carton Bed
</p>
<p style={{ textAlign: 'center', color: 'white',marginBottom:'40px' }}>
    $60
</p>
                </Carousel.Item>
                <Carousel.Item>

                <p style={{ textAlign: 'center', color: 'white' }}>
                <img src={dressor} height={'100px'} alt="" style={{ display: 'block', margin: 'auto',}} />

                Dressor
</p>
<p style={{ textAlign: 'center', color: 'white',marginBottom:'40px'  }}>
    $50
</p>
                </Carousel.Item>
                
                </Carousel>
                </Col>

          
        </Row>
    </Container>
);
}

export default Slider;