import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import '../../styles/App.css'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase-config';


const ArtistPreview= ()=> {


    const [artistPosts, setArtistPosts] = useState([]);

    useEffect(() => {
        const artistPostsRef = collection(db, "TheArtist")
        const queryartistPostsI = query(artistPostsRef, where("orderDisplay", "==", "1"));
        getDocs(queryartistPostsI)
            .then(res => setArtistPosts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
        console.log(artistPosts);
    }, []);


    return (
        <>
              <Container className="artist-home-container">
                    <Row >
                    {artistPosts.map((post) =>
                        <Col key={post.id} sm className="artist-content-col">
                            <Image src={post.image} fluid className='image-artist' />
                        </Col>
                        )}
                        <Col sm>
                            <p> Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers. </p>
                        </Col>
                    </Row>
                </Container>   
         
        </>
    )
}
export default ArtistPreview;
