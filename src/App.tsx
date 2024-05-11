import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCarousel from './components/Carousel';
import { Navbar, Nav, Container, Button,Dropdown} from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Slider from './components/Slider';
import BlogCard from './components/Blog';
import Cards from './components/Cards';
import Footer from './components/Footer'
import NavbarComponent from './components/Navbar';
function App() {
  const data = [
    { id:1,title:"Bed", img: 'https://static.vecteezy.com/system/resources/thumbnails/005/068/554/small/a-simple-bed-logo-or-icon-design-vector.jpg' },
    { id:2,title:"Sofa", img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEXx8fMjHyD////19fckHiD4+PkTERKNi43j4uRxb3AOCAkHAAAAAACGhYYiGx38/P0zMzPZ2dkcGBrJycp5eXlKSUm+vb5/f38YExWoqKmampqysrLq6uuUlJTDw8Ogn6ArKSlBQEBmZWZXVlc7OTsMAAly/0igAAADQ0lEQVR4nO2bDXOiMBBAA8tCiKFpoCAKIn70///FC0oVbGeuSfDGm9lna4Xq8tzETYLKGEEQBEEQBEEQBEEQBEEQBEEQBEH8HgUKlSWoEJ6oBKzYf6TWfOwL9jQt4OteroQ1K9mv+ZOsUPfyLXAil73GZzhBWwo3JUMkyvYZuYJs5exkEMkTnJg+5D5S+UEv7wSVV6KCQFbLtx/upekaPlIbtbiU2uR+qZLbRV9/AAgATCeidjWK8nitgYG6NqF3QyLwoiu0CYSFc1Go+w6RmUCaA3o7ARbpu5QyOHbmifKDW67qUiuojoEJ1H8U3s2Im17kbyb9IkiMVdEHUWTf3eMCIQvEUFNMoI1npmAno3FoiWSKTDXSQUpsFabytil3XlZYxPm9EKwaE+xc20udOTaT3pgLrxYMT0OsL4ncjF+4FdZSMlO8nHZGcQrdnUBfYtwk8gqh69+spTpVPQxR2r0Bx6TfJOQWQB/spThu5WyPqNzbDzfzurRKTNEqc2upFrMHKY8XIDTxoxRzklK7B6nGQ6qYS8lEgT47NJ9q5imPC5+icJ51UJkgNlKu7PiUTahngfKzj1O4lw9SUK0zW5IO23IqJfceJcFwFHMpMxhaA0NPnNSpz6OXkhmCj3IqpcAWHH7UNFPi6Lvegja7P0ex5o7ou1R98l8DAn+f9FD7lejIPVFx6j8tnkkZxjnDmx2T2han/tNi0HOpETMqR9Hk6vuN+9a8ri0vFY385PlLXk4qChbqUz83H0mRFEmR1OtI8YWlxAJS7DoVim7F3IdBTO4WOE/1uBLxJfdYiN4w7ed+qvq7ksxggZNmZlFcyriuY39qc0n903QB2+x0KNPEkyHIqYKlzhGbqX/bIg7vR7mj1CXIQkpXrxeKQhAEQRAEQRAEQRAEQRAEQRAEQRAEYYn1Bzf/ASx8Qf5PKWUuwx8VXm6Mv9d9t/soddtUk/2XR00iPV47Sxm64hJm+IDCxXGICO01NNur66G/jj/qcRYCDxkP247pqmvNDix4qAvVdu1fnH4hxaDqcPhWbVXxLSJDxZQ5QKOAKcVYhmgs2PCP4ftMOD7oVIT7DNZbTLpE612Hadc0SbNpml21Y3+R+gP8ik+36kV9WAAAAABJRU5ErkJggg==' },
    { id:3,title:"Dressor", img: 'data:image/jpeg;base64,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' },
    { id:4,title:"Shelf", img: 'https://cdn1.vectorstock.com/i/1000x1000/05/60/small-wall-shelf-icon-outline-vector-30570560.jpg'}

  ];
  const data1 = [
    { id:1,title:"Bed",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?', img: 'https://static.vecteezy.com/system/resources/thumbnails/005/068/554/small/a-simple-bed-logo-or-icon-design-vector.jpg' },
    { id:2,title:"Sofa",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?',  img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEXx8fMjHyD////19fckHiD4+PkTERKNi43j4uRxb3AOCAkHAAAAAACGhYYiGx38/P0zMzPZ2dkcGBrJycp5eXlKSUm+vb5/f38YExWoqKmampqysrLq6uuUlJTDw8Ogn6ArKSlBQEBmZWZXVlc7OTsMAAly/0igAAADQ0lEQVR4nO2bDXOiMBBAA8tCiKFpoCAKIn70///FC0oVbGeuSfDGm9lna4Xq8tzETYLKGEEQBEEQBEEQBEEQBEEQBEEQBEH8HgUKlSWoEJ6oBKzYf6TWfOwL9jQt4OteroQ1K9mv+ZOsUPfyLXAil73GZzhBWwo3JUMkyvYZuYJs5exkEMkTnJg+5D5S+UEv7wSVV6KCQFbLtx/upekaPlIbtbiU2uR+qZLbRV9/AAgATCeidjWK8nitgYG6NqF3QyLwoiu0CYSFc1Go+w6RmUCaA3o7ARbpu5QyOHbmifKDW67qUiuojoEJ1H8U3s2Im17kbyb9IkiMVdEHUWTf3eMCIQvEUFNMoI1npmAno3FoiWSKTDXSQUpsFabytil3XlZYxPm9EKwaE+xc20udOTaT3pgLrxYMT0OsL4ncjF+4FdZSMlO8nHZGcQrdnUBfYtwk8gqh69+spTpVPQxR2r0Bx6TfJOQWQB/spThu5WyPqNzbDzfzurRKTNEqc2upFrMHKY8XIDTxoxRzklK7B6nGQ6qYS8lEgT47NJ9q5imPC5+icJ51UJkgNlKu7PiUTahngfKzj1O4lw9SUK0zW5IO23IqJfceJcFwFHMpMxhaA0NPnNSpz6OXkhmCj3IqpcAWHH7UNFPi6Lvegja7P0ex5o7ou1R98l8DAn+f9FD7lejIPVFx6j8tnkkZxjnDmx2T2han/tNi0HOpETMqR9Hk6vuN+9a8ri0vFY385PlLXk4qChbqUz83H0mRFEmR1OtI8YWlxAJS7DoVim7F3IdBTO4WOE/1uBLxJfdYiN4w7ed+qvq7ksxggZNmZlFcyriuY39qc0n903QB2+x0KNPEkyHIqYKlzhGbqX/bIg7vR7mj1CXIQkpXrxeKQhAEQRAEQRAEQRAEQRAEQRAEQRAEYYn1Bzf/ASx8Qf5PKWUuwx8VXm6Mv9d9t/soddtUk/2XR00iPV47Sxm64hJm+IDCxXGICO01NNur66G/jj/qcRYCDxkP247pqmvNDix4qAvVdu1fnH4hxaDqcPhWbVXxLSJDxZQ5QKOAKcVYhmgs2PCP4ftMOD7oVIT7DNZbTLpE612Hadc0SbNpml21Y3+R+gP8ik+36kV9WAAAAABJRU5ErkJggg==' },
    { id:3,title:"Dressor",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?',  img: 'data:image/jpeg;base64,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' },
    { id:4,title:"Shelf",text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, iste?',  img: 'https://cdn1.vectorstock.com/i/1000x1000/05/60/small-wall-shelf-icon-outline-vector-30570560.jpg'}

  ];

  return (
    <div className="App">
    <div style={{ 
  backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseBMF491lzGuZCT9XbBQJgj2p4cUixk-3Vg&s')", 
  backgroundSize: 'cover', 
  backgroundPosition: 'center', 
  backgroundRepeat: 'no-repeat', 
  color: 'white', 
  padding: '20px', 
  height: '700px', 
  width: '100vw', minWidth:'1600px' }}>

<header className="App-header" >     
<NavbarComponent/>
        <h1 className='text-white' style={{textAlign:'center',marginTop:'50px'}}>FurniLux- Your Brand For</h1>
        
        <h1 className='text-white' style={{textAlign:'center'}}>Stylish Living</h1>    
        <p className='text-white' style={{textAlign:'center'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem facere sit </p>     
        <p className='text-white' style={{textAlign:'center'}}>
        dignissimos officia optio incidunt obcaecati rem? Culpa, perspiciatis id.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}> 
          <Button variant="outline-light" className='text-white'>Shop Now</Button> 
        </div>
        </header>
        </div>
        <Container>

        <div className="row justify-content-center" style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
  {data.map(item => (
    <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}  className="col col-lg-3 col-md-4 col-sm-12 my-3">
      <div style={{ border: '2px solid white', display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
        <img src={item.img} alt="" style={{ width: '100px', height: '70px',}} />
        <p style={{ margin: '0' }}>{item.title}</p>
      </div>
    </div>
  ))}
</div>
</Container>


        <Container>
        <div className="row" style={{ justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {data1.map((item) => (
    <div key={item.id} style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }} className="col col-lg-3 col-md-4 col-sm-12 my-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Text>{item.text}</Card.Text>
          <Card.Title>{item.title}</Card.Title>
               <FontAwesomeIcon icon={faCartShopping} className='fs-2'/>          </Card.Body>
      </Card>
    </div>
  ))}
</div>

      </Container>
      <CustomCarousel/>
      <Cards/>
      <Slider/>
      <BlogCard/>

      <Footer/>
        </div>


)}  ;


export default App; 