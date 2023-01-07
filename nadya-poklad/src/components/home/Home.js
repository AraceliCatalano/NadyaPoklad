import React from 'react';
import {  Container, Image, Row, Col } from 'react-bootstrap';
import '../../styles/TheArtist.css';
import Nadya1 from '../theArtist/nadya1.jpg';


function Home () {

    return (
       <>      
        <Container fluid="sm" >
            <Row>
             <Col sm="8">
                <Row>
                    <h3 className='title'> The Artist </h3>
                </Row>
                <Container className="artist-home-container" >
                <Row >
                    <Col sm className="artist-content-col">
                        <Image src={Nadya1} fluid className='image'/>
                    </Col>
                    <Col sm >
                        <p className="artist-home-text"> Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers. </p>
                    </Col>
                </Row>
        </Container>


                </Col>

                <Col sm="4">
                    <Row>
                        <h3 className='title'>Upcoming Events</h3>
                    </Row>
                    <Row>
                        EVENT AREA
                    </Row>
                    <Row>
                        EVENT AREA
                    </Row>
                </Col>
            </Row>

            
        </Container>
       </>
    )
}

export default Home;