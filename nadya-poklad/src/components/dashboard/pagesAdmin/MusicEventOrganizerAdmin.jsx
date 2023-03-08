import React from 'react'
import '../../../styles/App.css';
import { Container, Row, Col} from 'react-bootstrap';
import SideBar from './SideBar';



export function MusicEventOrganizerAdmin() {

  

  return (
    <>
        <Row>
          <SideBar />

          <Col sm="9" className="main-menu">
            <Container fluid>
              <Row>
              <h4 className="title mt-3">Music Event Organizer page: content administration </h4>
            </Row>
          </Container>
          
          </Col>
        </Row>
    </>
  )
}