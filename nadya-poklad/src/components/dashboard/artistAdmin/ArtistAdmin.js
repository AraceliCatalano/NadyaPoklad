import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import ArtistItems from './ArtistItems';
import AddArtist from './AddArtist';
import '../../../styles/App.css';
import SideBar from '../SideBar';

export default function ArtistAdmin() {
  return (
    <>
        <Row>
          <SideBar />
          <Col sm="9" className="main-menu">
            <Container fluid>
              <Row>
               <h4 className="title mt-3">Artist page: content administration </h4>
              </Row>
              <Row>
                <AddArtist />
              </Row>
              <Row>
                <ArtistItems />
              </Row>
          </Container>
          </Col>
        </Row>
    </>
  )
}
