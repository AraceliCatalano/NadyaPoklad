import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebase-config';
import {  Container, Image, Row, Col } from 'react-bootstrap';
import '../../styles/App.css';


export default function TheArtist() {

  
  const [artistPostImage, setArtistPostsImage ] = useState([]);
  


  useEffect(() => {         
    const artistPostImageRef = collection(db , "TheArtist");  
    const queryArtistPostI = query(artistPostImageRef, where('active', '==', true ));
    getDocs(queryArtistPostI) 
    .then(res => setArtistPostsImage(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    console.log(artistPostImage)   
  }, []);  
  

  return (
    <>
    <Container fluid="sm">
      <Row>
      <h2 className='title'> The Artist </h2>
      </Row>
    </Container>

      <Container >
           <p>
           Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers.
          </p> 
      </Container>

      <Container >
      {artistPostImage.map((post) =>
        <Row sm key={post.id} className="artist-content-row" style={{ flexDirection: post.orderDisplay % 2 ? 'row' : 'row-reverse' }}>
          <Col sm className="artist-content-col">
            <Image src={post.image} fluid className='image'/>
          </Col>
          <Col sm>
            <p>{post.description}</p>
          </Col>
        </Row>
        )}
      </Container>   
    </>
  )
}
