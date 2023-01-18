import React from 'react';
import '../../styles/App.css'
import {  Accordion,  Figure,  Card } from 'react-bootstrap';


export default function UpcomingEventsItem(props) {
 



  return (
    <>
      

      <Card className=" event-card  box-picture" style={{ userSelect: "none" }} key={props.id}>
    
      <small style={{ backgroundColor: '#2f434a', color: "white" , marginLeft:'5px'}} > {props.date}  </small> 
          <Figure>
              <Figure.Image
                width={280}
                height={180}
                alt="171x180"
                src={props.image}
                className='box-picture' />
        </Figure>
      
      <Card.Body >

        <Card.Text position-relative="true" className="section">
            <Accordion defaultActiveKey="1" >
      
              <Accordion.Item
                eventKey="0"
                style={{ backgroundColor: '#2f434a', color: "white" }} >
                <Accordion.Header  >
                {props.event} 
                </Accordion.Header>
             
                <Accordion.Body style={{ fontSize:'12px', marginBottom: '50px'}} >{props.description}</Accordion.Body>
              </Accordion.Item>
        
            </Accordion>
     </Card.Text>
      </Card.Body>
    </Card>

  </>





  )
}
