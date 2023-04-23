import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import '../../../styles/App.css';
import SideBar from "./SideBar";
import MenuItems from "../contactAdmin/MenuItems";


export function ContactAdmin() {
  

  return (
    <>
      <Row>
        <SideBar/>

        <Col sm={9} className="main-menu">
          <Container >

            <Row >
              <h4 className="title mt-3">Contact page: content administration </h4>
            </Row>

            <Row >
              <MenuItems />
            </Row>

           
          </Container>
        </Col>
      </Row>
    </>
  )
}
