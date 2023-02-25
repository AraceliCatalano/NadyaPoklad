import React, { useState, useEffect } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase-config';
import '../../styles/App.css'


const ArtistPreview= ()=> {


    const [artistPosts, setArtistPosts] = useState([]);

    useEffect(() => {
        const artistPostsRef = collection(db, "TheArtist")
        const queryartistPostsI = query(artistPostsRef, where("orderDisplay", "==", "1"));
        getDocs(queryartistPostsI)
            .then(res => setArtistPosts(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))))
        // console.log(artistPosts);
    }, []);


    return (
        <>
              <Container className="artist-home-container">
                    <Row >
                    {artistPosts.map((post) =>
                    
                        <Col key={post.id} className="">
                            <Image src={post.image}  className='image-artist-home' />
                            {/* {post.description} */}
                    
                        </Col>
                        )}
                        <Col lg>


                            {/* <p> Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers. </p> */}
                            <p> Let me introduce myself, I'm Nadya Poklad, an artist born in Ukraine. From a very young age, I discovered my passion for music and the arts, and dedicated myself to cultivating my talent as a composer, pianist, and prose writer. </p>
                            <p style={{display:'none'}}> Throughout my career, I have had the opportunity to share my art in various schools and institutions, and to participate in performances in China and Canada, where I have demonstrated my skill and creativity on stage. </p>
                            <p style={{display:'none'}}> I currently reside in Canada, where I continue to work hard to improve my art and surprise my audience with my music and lyrics.</p>
                            <p> For me, art is more than a passion, it is a way of life and a way to express myself in the world. I hope to continue sharing my work with the world and inspiring others through my music and art. <br/> </p> <p><Link to="/theArtist" className="link-header" style={{textAlign:'right'}}><> read more >></></Link> </p>
                            
                            
                        </Col>
                    </Row>
                    <Row>

                    </Row>
                </Container>   
         
        </>
    )
}
export default ArtistPreview;
