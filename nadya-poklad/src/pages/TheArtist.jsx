import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
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
    console.log(artistPosts);
  }, []);

 

  return (
    <>
      <Container fluid="sm">
      <Row>
      <h4 className='title home-h4 mt-3'> The Artist </h4><br/>
  </Row>
      </Container>

      <Container >
        <p>
          Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers.
        </p>
      </Container>

      <Container >

        { artistPosts
          .map((post) =>
          <Container>
          <Row sm key={post.id} className="artist-content-row" style={{ flexDirection: post.orderDisplay % 2 ? 'row' : 'row-reverse' }}>
              <Col sm className="artist-content-col ">
                <Image src={post.image} fluid className='image artist-content' 
                style={{
                  minWidth:'290px' , 
                  width:'450px',
                  minHeight: '350px',
                  borderRadius:'8px',
                  boxShadow:'5px 5px 10px 0px rgba(172, 216, 236, 0.65)',
                  
                  }}/>
              </Col>
              <Col sm>
                <p>{post.description}</p>
              </Col>
          </Row>
          </Container>
        )}
      </Container>
    </>
  )

        }

//         Let me introduce myself, I'm Nadya Poklad, an artist born in Ukraine. From a very young age, I discovered my passion for music and the arts, and dedicated myself to cultivating my talent as a composer, pianist, and prose writer. Music has always been my main source of inspiration, and I draw from a wide range of styles and genres to create my own unique sound. My compositions are often described as emotional, introspective, and deeply personal, reflecting my own experiences and emotions.

// // In addition to my work as a composer and musician, I am also passionate about education and have worked as a teacher and instructor in various schools and institutions. Sharing my knowledge and expertise with others is a deeply rewarding experience, and I believe that art has the power to transform lives and inspire change.

// // Over the years, I have had the opportunity to perform in numerous venues and festivals, both in my home country and abroad. In particular, my performances in China and Canada have been some of the highlights of my career, allowing me to connect with new audiences and share my music with people from all walks of life.

// // Currently based in Canada, I continue to explore new avenues of creativity and expression, always striving to push the boundaries of my own art. Whether through my music, my writing, or my teaching, I am committed to making a positive impact on the world and spreading the joy and beauty of art to as many people as possible.