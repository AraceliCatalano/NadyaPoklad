import React from 'react';
import {Card, } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import '../../styles/Contact.css';
import Piano from '../../Assests/images/PianoContact.jpg';


export default function Contact() {
  return (
<>
    <h3 className='contact-title'> Contact </h3>
      <h5 className='contact-text'> Contact me if you are interested in awesome lessons or for performance events, as well as permission to play any compositions.</h5>

    <Card  className='ImgOverlay '>
       <Card.Img src= {Piano} alt="Card image" className='cardImage'/>
           
          <div class="position-absolute bottom-0 start-0 cardText imgOverlay">
         
                <Link as='mail' to="#" className='link cardText'>
                    <i className="bi bi-envelope-fill icon"></i>
                    nadiapoklad27@gmail.com
                </Link>
           
                <a  className='link' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@nadiiapoklad1533'> 
                <i className="bi bi-youtube icon"></i>
                 Nadiia Poklad - YouTube
                </a>
          </div>
    </Card>
</>
  )
}
