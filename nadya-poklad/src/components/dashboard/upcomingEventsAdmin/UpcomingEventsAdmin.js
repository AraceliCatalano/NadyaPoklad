import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import '../../../styles/App.css';
import SideBar from '../SideBar';
import MenuItems from './MenuItems';

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
               <MenuItems />
              </Row>
              <Row>
               
              </Row>
          </Container>
          </Col>
        </Row>
    </>
  )
}
