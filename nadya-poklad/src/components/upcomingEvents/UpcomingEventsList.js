import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import {db} from '../../firebase-config';
import {  Container } from 'react-bootstrap';
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
 <Container className='' col-md-6 col-lg-3 col-sm-12>
    {UpcomingEventsPost.map((post) =>
    
        <UpcomingEventsItem 
              date={post.date}
              image={post.image}
              event={post.title}
              description= {post.description}
        />
        
    
    )}
    
  </Container>

 </>
  )
}
