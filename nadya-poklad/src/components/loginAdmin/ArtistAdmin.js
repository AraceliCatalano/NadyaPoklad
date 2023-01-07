import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AddArtistItem from "./AddArtistItem";
import ArtistItems from "./ArtistItems";


export default function ArtistAdmin() {
    //[For Alba and future Ara] "getArtistPostId" is the prop passed to ArtistItems 
    const [artistPostId, setArtistPostId] = useState("");

    const getArtistPostIdHandler = (id) => {
        console.log("The ID of document to be edited: ", id);
        setArtistPostId(id);
        };

return (
  <>
    
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <AddArtistItem id={artistPostId} setArtistPostId={setArtistPostId} />
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <Col>
          <ArtistItems getArtistPostId={getArtistPostIdHandler} />
        </Col>
      </Row>
    </Container>
  

    </>
  )
}
