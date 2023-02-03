import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy  } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import '../../styles/App.css';
import UpcomingEventsItem from './UpcomingEventsItem';
import { ButtonGeneric } from '../ButtonGeneric';


export default function UpcomingEvents() {

  const [UpcomingEventsPost, setUpcomingEventsPost] = useState([]);



  useEffect(() => {
    const UpcomingEventsPosttImageRef = collection(db, "UpcomingEvents");
    // const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef, where('active', '==', true ));
    const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef, orderBy('date', 'desc'));
    getDocs(queryUpcomingEventsPostI)
      .then(res => setUpcomingEventsPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    console.log(UpcomingEventsPost)
  }, []);


  return (
    <>
      <h2 className='event-title'> Upcoming Events</h2>
      <p className='subtitle'> Schedule of next Performances during 2023. I would like to enjoy it with you! </p>
      


      <Container className='container-list' >

        {/* UpcomingEventsPost.length === 0 ? " No Events at Moment " : */}
        <CardGroup>


          <Row className='container-list g-4' mb-3 xs={1} sm={2} md={3} lg={4} >

            {UpcomingEventsPost.map((post) =>

              <Col key={post.id} >
                <UpcomingEventsItem
                  date={post.date}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                  eventType={post.eventType}
                  free={post.free}
                  eventLocation={post.eventLocation}
                  linkToBuy={
                    post.eventType === "Free" ?  <span >  {"- Free Event -"} </span>
                    :
                    <ButtonGeneric text=  <a target="_blank" rel="noopener noreferrer" href={post.linkToBuy}> Buy Ticket </a> />
                     
                   
             
                  }  
                  linkToEvent={post.linkToEvent ===""
                     ? 
                     <button disabled="true"style={{display:'none'}}>-</button> 
                     : 
                    <ButtonGeneric text={<a target="_blank" rel="noopener noreferrer" href={post.linkToEvent}> Go Event </a>}/>

                  }/>


               

              </Col>
            )}
          </Row>


</CardGroup>

</Container>
      

    </>
  )
}
