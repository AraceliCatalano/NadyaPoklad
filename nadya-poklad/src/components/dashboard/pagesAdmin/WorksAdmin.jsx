import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import '../../../styles/App.css';
import SideBar from './SideBar';
import MenuItems from '../worksAdmin/MenuItems';

export default function WorksAdmin() {
  return (
    <>
    <Row>
      <SideBar />
      <Col sm="9" className="main-menu">
        <Container fluid>
          <Row>
           <h4 className="title mt-3">Works: content administration </h4>
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
