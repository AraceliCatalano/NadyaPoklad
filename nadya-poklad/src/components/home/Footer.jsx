import React, { useState, useEffect } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import '../../styles/App.css'

export function Footer() {

  const [emailContact, setEmailContact] = useState([]);
  const [youTubeContact, setYoutubeContact] = useState([]);

  useEffect(() => {
    const emailContactRef = collection(db, "Contact");
    const querycontactEmail = query(emailContactRef, where("contactType", "==", "Email"));
    getDocs(querycontactEmail)
      .then(res => setEmailContact(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
  }, []);

  useEffect(() => {
    const YoutubeContactRef = collection(db, "Contact");
    const queryYoutubeEmail = query(YoutubeContactRef, where("contactType", "==", "Youtube"));
    getDocs(queryYoutubeEmail)
      .then(res => setYoutubeContact(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
  }, []);

  return (
    <footer>
      <Navbar className="footer my-5 " fixed=''>
        <Container className="footerbg " >
          <Navbar.Brand href="#home" className="title footerBrand ">Nadya Poklad</Navbar.Brand>

          <Navbar.Text className="">
            <Row className=" "   >
            {emailContact.map((post) =>
              <Col className=" " key={post.id}>  
                <a href={`mailto:${post.description}`}  type='email' target='_blank' rel="noopener noreferrer" className="btn-footer footerbg ">
                  <i className="bi bi-envelope-fill icon mx-1"></i>
                </a>
              </Col>
            )}
            {youTubeContact.map((post) =>
              <Col className=" col-xs-12"key={post.id}>
                <a className="btn-footer footerbg " target="_blank" rel="noopener noreferrer" href={post.description}>
                  <i className="bi bi-youtube icon mx-1"></i>
                </a>

              </Col>
            )}
            </Row>
            <p>Made by Araceli Catalano & Alba Morán </p>
            <p>© Nadya Poklad</p>
          </Navbar.Text>

        </Container>
      </Navbar>
    </footer>

  )
}
