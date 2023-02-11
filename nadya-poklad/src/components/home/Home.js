import SectionItem from './SectionItem'
import imageComposer from '../../Assests/images/Composer.jpg'
import imagePianist from '../../Assests/images/Pianist.jpg'
import imageTeacher from '../../Assests/images/Teacher.jpg'
import imageEngage from '../../Assests/images/Engage.jpg'
import imageContact from '../../Assests/images/PianoContact.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import ArtistPreview from './ArtistPreview'
import { VideoYouTube } from '../VideoYouTube';

function Home() {

    return (
        <>
            <Container fluid="sm" >
                <Row>
                    <Col sm="8">
                        <Row>
                            <h3 className='title'> The Artist </h3>
                        </Row>
                    <ArtistPreview />
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

                 
            <Container className=''>


                <Row>
                    <Col>
                        <h4 className='home-h4'> Works </h4>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row>
                    <Col className='responsive-Row ' >
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
                <Container className='mt-4'>

                <Col className='responsive-Row ' >

                    <Col >
                        <Col   >
                            <h4 className='home-h4'> Engage </h4>
                        </Col>
                        <Col className='responsive-Row' >

                            <SectionItem
                                url='./engage'
                                image={imageEngage}
                                name='Engage'
                            />
                        </Col>
                    </Col>


                    <Col >
                        <Col>
                            <h4 className='home-h4'> Contact </h4>
                        </Col>
                        <Col className='responsive-Row' >

                            <SectionItem
                                url='./contact'
                                image={imageContact}
                                name='Contact'
                            />
                        </Col>
                    </Col>
                </Col>

            </Container>

        </>
    )
}

export default Home;