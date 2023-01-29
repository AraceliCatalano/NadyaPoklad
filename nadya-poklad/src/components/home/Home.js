import SectionItem from './SectionItem'
import imageComposer from '../../Assests/images/Composer.jpg'
import imagePianist from '../../Assests/images/Pianist.jpg'
import imageTeacher from '../../Assests/images/Teacher.jpg'
import imageEngage from '../../Assests/images/Engage.jpg'
import imageContact from '../../Assests/images/PianoContact.jpg'
import { Row, Col, Container } from 'react-bootstrap'
import { VideoYouTube } from '../VideoYouTube';

function Home() {

    return (
        <>
        <Container>

            <VideoYouTube
            url= {'https://www.youtube.com/embed/t_ZEavuVcZ0'}
            title ={'Cambiemos el aspecto visual(UI) de nuestro Sublime Text 3'}
            />
        </Container>
            <Container className=''>


                <Row>
                    <Col>
                        <h4 className='home-h4'> Works </h4>
                    </Col>
                </Row>
            </Container>
              
                    <hr />

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


                        <hr />


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
                        <hr />

                    </Container>

                </>
                )
}

                export default Home;