import React from 'react';
import {  Container, Image, Row, Col } from 'react-bootstrap';
import '../../styles/TheArtist.css';
import Nadya1 from '../theArtist/nadya1.jpg';
import SectionItem from './SectionItem'
import imageComposer from '../../Assests/images/Composer.jpg'
import imagePianist from  '../../Assests/images/Pianist.jpg'
import imageTeacher from '../../Assests/images/Teacher.jpg'


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
            </Row>
        </Container>
        
                    
                    
        <Container>
            <Row>
                    <Col  className='responsive-Row ' >
                        <SectionItem
                            url='./works/composer'
                            image={imageComposer}
                            name='Composer'
                        />
                    </Col>
                    <Col className='responsive-Row '>
                        <SectionItem
                            url='./works/pianist'
                            image={imagePianist}
                            name='Pianist'
                        />
                    </Col>
                    <Col className='responsive-Row '>
                        <SectionItem
                            url='./works/teacher'
                            image={imageTeacher}
                            name='Teacher'
                        />
                    </Col>
                </Row>
        </Container>

        <Container>
            <Row>
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