import SectionItemList from '../components/SectionItems/SectionItemList'
import { Row, Col, Container } from 'react-bootstrap'
import ArtistPreview from '../components/home/ArtistPreview'
import {UpcomimgEventSummary} from '../components/upcomingEvents/UpcomimgEventSummary'


export const Home = () => {

    return (
        <>
            <Container fluid="sm" className="mx-3 mb-5 my-2" >
                <Row>
                    <Col sm="8">
                        <Row>
                            <h4 className='title home-h4 mt-3'> The Artist </h4><br/>
                        </Row>
                        <ArtistPreview />
                    </Col>


                    <Col sm="9" md='9' lg='3'>
                        <Row >
                            <h4 className='title home-h4 mx-2 mt-3'>Upcoming Events</h4><br/>
                        </Row>
                        <Row fluid="sm" className="mx-3 mb-2">
                            <UpcomimgEventSummary/>
                        </Row>
                        
                    </Col>
                </Row>


            </Container>

            <Container fluid="sm" className="mx-3 mb-5" >
                    <h4 className='home-h4'> Works </h4><br/>
                    
                <Col  >
                    <Row className="responsive-Row ">
                        <SectionItemList />
                    </Row>
                </Col>
            </Container>

           







        </>
    )
}

