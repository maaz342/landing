import React from 'react'
import carto from '../public/cartonbed.jpg'
import sofa from '../public/sofa.jpg'
import dressor from '../public/dressor.jpg'
import shelf from '../public/shelf.jpg'
import bed from '../public/bed.jpg'
import sofa1 from '../public/sofa1.jpeg'
import shelf1 from '../public/shelf1.jpg'
import dressor1 from '../public/dressor1.jpg'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Cards = () => {
    const data1 = [
        { id:1,title:"Carton Bed",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?', img:carto },
        { id:2,title:"Sofa",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?',  img:sofa},
        { id:3,title:"Dressor",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?',  img:dressor },
        { id:4,title:"Shelf",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?',  img: shelf},
        { id:5,title:"Bed",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?', img:bed },
        { id:6,title:"Comfortable Sofa",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?', img:sofa1 },
        { id:7,title:"Book Shelf",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?', img: shelf1 },
        { id:7,title:"6 Drawer Dressor",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?', img: dressor1 },




    
      ];
  return (
    <Container>
    <div className="row" style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
    <h1 style={{textAlign:'center'}}>All Products</h1>

{data1.map((item) => (
<div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }} className="col col-lg-3 col-md-4 col-sm-12 my-3">
  <Card style={{ width: '18rem',height:'100%' }}>
    <Card.Img variant="top" src={item.img} style={{height:'50%'}} />
    <Card.Body>
      <Card.Text>{item.text}</Card.Text>
      <Card.Title className="d-flex justify-content-between align-items-center">
                    <span>{item.title}</span>
                  <FontAwesomeIcon icon={faCartShopping} className='fs-2'/>       
                </Card.Title>
    </Card.Body>
  </Card>
</div>
))}
</div>

  </Container>  )
}

export default Cards