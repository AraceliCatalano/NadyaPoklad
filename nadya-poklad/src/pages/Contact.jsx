import React, { useState, useEffect } from 'react';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Card, Container, Row } from 'react-bootstrap';
import '../styles/Contact.css';


export function Contact() {

  const imageUrl = 'https://firebasestorage.googleapis.com/v0/b/nadyapokladsite.appspot.com/o/Contact%2FPianoContact.jpg?alt=media&token=cce29ac2-9353-465d-87dd-a3eaa4c8fb91';

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
    <>
      <Container fluid="sm">
        <Row >
          <h4 className='title home-h5 mx-2 mt-3'> Contact </h4><br />
        </Row>
      </Container>

      <Container >
        <p>
          Contact me if you are interested in awesome lessons or for performance events, as well as permission to play any compositions.
        </p>
      </Container>

      <Card className='ImgOverlay '>
      <Card.Img src={imageUrl} alt="Card image" className='cardImage' />
        <div className="position-absolute bottom-0 start-0 cardText imgOverlay">
          {emailContact.map((post) =>
            <div key={post.id}>
              <a href={`mailto:${post.description}`} type='email' target='_blank' rel="noreferrer" className='link cardText'>
                <i className="bi bi-envelope-fill icon"></i>
                {post.description}
              </a>
            </ div >
          )}
          {youTubeContact.map((post) =>
            <div key={post.id}>
              <a className='link' target="_blank" rel="noopener noreferrer" href={post.description}>
                <i className="bi bi-youtube icon"></i>
                Nadya Poklad - YouTube
              </a>
            </ div >
          )}
        </div>
      </Card>
    </>
  )
}
