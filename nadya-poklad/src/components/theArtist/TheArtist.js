import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebase-config';
import {  Container, Image, Row, Col } from 'react-bootstrap';
import '../../styles/App.css';


export default function TheArtist() {

  const [artistPosts, setArtistPosts ] = useState([]);
  const [artistPostImage, setArtistPostsImage ] = useState([]);

  useEffect(() => {         
    const artistPostRef = collection(db , "TheArtist");  
    const queryArtistPost = query(artistPostRef, where('orderDisplay', '==', 0 ));
    getDocs(queryArtistPost) 
    .then(res => setArtistPosts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    console.log(artistPosts)   
  }, [])

  useEffect(() => {         
    const artistPostImageRef = collection(db , "TheArtist");  
    const queryArtistPostI = query(artistPostImageRef, where('orderDisplay', '!=', 0 ));
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
          {artistPosts.map((post) =>
                <Row sm key={post.id}>
                 <p>{post.description}</p>
                </Row>
                )}
          </p> 
      </Container>

      <Container >
      {artistPostImage.map((post) =>
        <Row sm key={post.id} className="artist-content-row">
          <Col sm className="artist-content-col">
            <Image src={post.imageURL} fluid className='image'/>
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
