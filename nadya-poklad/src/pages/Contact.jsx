import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Contact.css';
import Piano from '../Assests/images/PianoContact.jpg';


export function Contact() {
  return (
    <>

      <Container fluid="sm">
        <Row >
          <h4 className='title home-h4 mx-2 mt-3'> Contact </h4><br />
        </Row>
      </Container>

      <Container >
        <p>
          Contact me if you are interested in awesome lessons or for performance events, as well as permission to play any compositions.
        </p>
      </Container>


      <Card className='ImgOverlay '>
        <Card.Img src={Piano} alt="Card image" className='cardImage' />

        <div className="position-absolute bottom-0 start-0 cardText imgOverlay">

          <a href='mailto:pokladweb@gmail.com' type='email' target='_blank' className='link cardText'>
            <i className="bi bi-envelope-fill icon"></i>
           pokladweb@gmail.com

          </a>

          <a className='link' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@nadiiapoklad1533'>
            <i className="bi bi-youtube icon"></i>
            Nadya Poklad - YouTube
          </a>
        </div>
      </Card>
    </>
  )
}
