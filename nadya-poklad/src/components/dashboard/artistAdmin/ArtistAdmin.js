import React from 'react';
import { Container, Col, Row } from "react-bootstrap";

import '../../../styles/App.css';
import SideBar from '../SideBar';
import MenuItems from './MenuItems';

export default function ArtistAdmin() {
  return (
    <>
        <Row>
          <SideBar />
          <Col sm="9" className="main-menu">
            <Container fluid>
              <Row>
               <h4 className="title mt-3 mb-4">Artist page: content administration </h4>
              </Row>
              <Row className='mb-3 border-bottom'>
               <h5>Tips for using this admin page: </h5>
               <p>Use the Add new item button to create a new pair of image and text. You will be able to create as many items as wished, but please consider that adding less than 3 or more than 5 is NOT recommended. The reason is the display will be unbalanced. </p>
               <p>You can also use the Edit and cancel Button next to each post to update the text or change the image of the post. </p>
               <p>IMPORTANT: The order display field controls the order in which the posts are displayed. Please always use consecutive numbers. This keeps the image of image posts with odd numberts at the left, and the image of the posts with even numbers in the order display at the right.</p>
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
