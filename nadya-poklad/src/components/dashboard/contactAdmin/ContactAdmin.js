import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddConactItem from "./AddConactItem";
import ContactItems from "./ContactItems";
import '../../../styles/App.css';
import SideBar from '../SideBar';

export default function ContactAdmin() {
  //[For Alba and future Ara] "getArtistPostId" is the prop passed to ArtistItems 
  const [contactPostId, setContactPostId] = useState("");

  const getContactPostIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setContactPostId(id);
  };

  return (
    <>
      <Row>
        <SideBar />

        <Col sm="9" className="main-menu">
          <Container >

            <Row >
              <h4 className="title mt-3">Contact page: content administration </h4>
            </Row>

            <Row >
              <AddConactItem id={contactPostId} setContactPostId={setContactPostId} />
            </Row>

            <Row>
              <ContactItems getContactPostId={getContactPostIdHandler} />
            </Row>

          </Container>
        </Col>
      </Row>
    </>
  )
}
