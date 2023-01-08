import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddArtistItem from "./AddArtistItem";
import ArtistItems from "./ArtistItems";
import '../../styles/App.css'
import SideBar from './SideBar';

export default function ArtistAdmin() {
  //[For Alba and future Ara] "getArtistPostId" is the prop passed to ArtistItems 
  const [artistPostId, setArtistPostId] = useState("");

  const getArtistPostIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setArtistPostId(id);
  };

  return (
    <>
      <Row>
        <SideBar />

        <Col sm="9" className="main-menu">
          <Container >

            <Row >
              <h4 className="title mt-3">Artist page: content administration </h4>
            </Row>

            <Row >
              <AddArtistItem id={artistPostId} setArtistPostId={setArtistPostId} />
            </Row>

            <Row>
              <ArtistItems getArtistPostId={getArtistPostIdHandler} />
            </Row>

          </Container>
        </Col>
      </Row>
    </>
  )
}
