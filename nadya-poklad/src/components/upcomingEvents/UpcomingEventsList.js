import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/App.css';
import UpcomingEventsItem from './UpcomingEventsItem';
import { ButtonGeneric } from '../ButtonGeneric';

export default function UpcomingEvents() {

  const [UpcomingEventsPost, setUpcomingEventsPost] = useState([]);



  useEffect(() => {
    const UpcomingEventsPosttImageRef = collection(db, "UpcomingEvents");
    // const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef, where('active', '==', true ));
    const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef);
    getDocs(queryUpcomingEventsPostI)
      .then(res => setUpcomingEventsPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    console.log(UpcomingEventsPost)
  }, []);


  return (
    <>
    <h2 className='title'> Upcoming Events</h2>
      <p className='subtitle'> Schedule of next Performances during 2023. I would like to enjoy it with you! </p>
      <hr/>


      <Container className='container-list' >
      
        {/* UpcomingEventsPost.length === 0 ? " No Events at Moment " : */}

          <Row className='container-list' mb-3>

            { UpcomingEventsPost.map((post) =>

              <Col xs={12} sm={6} md={4} lg={4} mb-5>
                <UpcomingEventsItem
                  date={post.date}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  eventType={post.eventType}
                  eventLocation={post.eventLocation}
                  linkToBuy={
                    post.eventType === "Free Show" ?  
                          <ButtonGeneric style={{display:'none'}}/ > :
                          <a target={"_blank"} rel="noopener noreferrer" href={post.linkToBuy} style={{display: 'block'} }> Buy Tickets </a>
                           }
                  linkToEvent={<a target="_blank" rel="noopener noreferrer" href={post.linkToEvent}> Go to Event </a>}
                                 
                />

              </Col>
            )}
          </Row>
        
      </Container>

    </>
)
}
