import React from 'react';
import {Card} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import '../../styles/Contact.css';
import Piano from '../../Assests/images/PianoContact.jpg';


export default function Contact() {
  return (
    <Card  className='ImgOverlay container-fluid'>
      
       <Card.Img src= {Piano} alt="Card image" className='cardImage'/>

        <Card.ImgOverlay>
            <Card.Title className='cardBrand'> 
                <h3 className='cardBrandH3 '> Nadya Poklad </h3> 
            </Card.Title>
        </Card.ImgOverlay>

        <div className='cardText'>
            <Card.Title className=''> 
                <h3 className=''> Contact me </h3> 
            </Card.Title>
            <Card.Text className='cardText'>
            Contact me if you are interested in awesome lessons or for performance events, as well as permission to play any compositions.
            </Card.Text>
            <Card.Text className='cardText'>
                <i className="bi bi-envelope-fill icon"></i>
            <Link to="#" className='link'>
                nadiapoklad27@gmail.com
            </Link>
            </Card.Text>
            <Card.Text className=''>
              <i className="bi bi-youtube icon"></i>
            <Link to="#" className='link'>
              Nadiia Poklad - YouTube
            </Link>
            </Card.Text>
        </div>
        
    
  </Card>
  )
}
