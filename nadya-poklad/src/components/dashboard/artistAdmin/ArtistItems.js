import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import {db} from '../../../firebase-config';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../../styles/App.css'
import DeleteArtistPost from './DeleteArtistPost';

export default function ArtistItems() {

  const [artistPosts, setArtistPosts ] = useState([]);
  useEffect(() => {

    const artistPostsRef = collection(db, "TheArtist");
    const q = query(artistPostsRef, orderBy("orderDisplay", "desc"));
    onSnapshot(q, (snapshot) => {
      //console.log(snapshot)
      const artistPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArtistPosts(artistPosts);
      console.log(artistPosts);
    });
  }, []);

  
  
  
  
  return (
    <>
    <h4 className="title">Artist Post List</h4>
    <div>
      {artistPosts.length === 0 ? (
        <div>
          <p> You have deleted all posts for The Artist section. Consider uploading some content.</p>
        </div>
      ) : (
        artistPosts.map(({ id, description, imageURL, orderDisplay }) => (
          <Container className="mt-3 border p-3" key={id}>
             <Row>
                <Col className="sm-3">
                  <Image src={imageURL} alt="artist post" style={{height:100}}/>
                </Col>
                <Col className="sm-9">
                  <p>{description}</p>
                </Col>
                <Col className="sm-2">
                  <p>{orderDisplay}</p>
                </Col>
                <Col>
                  <DeleteArtistPost  id={id} imageURL={imageURL}/>
                </Col>
             </Row>
          </Container>
        ))
      )}
    </div>
   </>
  )
}
