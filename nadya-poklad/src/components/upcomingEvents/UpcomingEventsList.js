import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebase-config';
import {  Container , Row, Col, Collapse} from 'react-bootstrap';
import '../../styles/App.css';
import UpcomingEventsItem from './UpcomingEventsItem';

export default function UpcomingEvents() {
  
  const [UpcomingEventsPost, setUpcomingEventsPost ] = useState([]);
  


  useEffect(() => {         
    const UpcomingEventsPosttImageRef = collection(db , "UpcomingEvents");  
    const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef, where('active', '==', true ));
    getDocs(queryUpcomingEventsPostI) 
    .then(res => setUpcomingEventsPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    console.log(UpcomingEventsPost)   
  }, []);  
  

  return (
 <>
 <Container className=''container fluid>
  <Row>

    {UpcomingEventsPost.map((post) =>
   <Col xs={12} md={6} lg={3}>
    <UpcomingEventsItem 
    date={post.date}
    image={post.image}
    event={post.title}
    description= {post.description}
    eventType={post.eventType}
    linkToBuy={post.linkToBuy}
    linkToEvent={post.linkToEvent}
    buyTickets={post.buyTickets}
    tickets={post.tickets}
    />
    
    
    </Col> 
    )}
    </Row>
    
  </Container>

 </>
  )
}
