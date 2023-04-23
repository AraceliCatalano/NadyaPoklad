import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase-config';
import { Container, Image, Row, Col } from 'react-bootstrap';
import '../styles/App.css';

export function TheArtist() {

  const [artistPosts, setArtistPosts] = useState([]);

  useEffect(() => {
    const artistPostsRef = collection(db, "TheArtist");
    const queryartistPostsI = query(artistPostsRef, orderBy("orderDisplay", "asc"));
    getDocs(queryartistPostsI)
      .then(res => setArtistPosts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
  }, []);

  return (
    <>
      <Container fluid="sm">
        <Row>
          <h4 className='title home-h5 mt-3'> The Artist </h4><br />
        </Row>
      </Container>

      <Container >
        <p>
          Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers.
        </p>
      </Container>

      <Container >
        {artistPosts
          .map((post) =>
            <Container key={post.id}>
              <Row sm className="artist-content-row" style={{ flexDirection: post.orderDisplay % 2 ? 'row' : 'row-reverse' }}>
                <Col sm className="artist-content-col ">
                  <Image src={post.image} className='image artist-content'
                  />
                </Col>
                <Col md>
                  <p>{post.description}</p>
                </Col>
              </Row>
            </Container>
          )}
      </Container>
    </>
  )
}