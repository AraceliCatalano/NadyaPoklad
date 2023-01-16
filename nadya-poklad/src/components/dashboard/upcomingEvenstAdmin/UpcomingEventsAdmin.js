import React from 'react'
import '../../../styles/App.css'
import { Container, Row, Col} from 'react-bootstrap';
import SideBar from '../SideBar';
import AddUpcomingEvent from './AddUpcomingEvent';
import UpcomingEventItems from './UpcomingEventItems';



export default function UpcomingEventsAdmin() {

  

  return (
    <>
      
        
        <Row>
          <SideBar />

          <Col sm="9" className="main-menu">
            <Container fluid>
              <Row>
              <h4 className="title mt-3">Upcoming Events page: content administration </h4>
            </Row>
            <Row>
               <UpcomingEventItems />
              </Row>
              <Row>
                <AddUpcomingEvent />
              </Row>
          </Container>
          
          </Col>
        </Row>

  
    </>
  )
}