import React from 'react';
import '../../styles/App.css'
import { Figure,  Card, ListGroup,  } from 'react-bootstrap';

import { ButtonGeneric } from '../ButtonGeneric';


export default function UpcomingEventsItem(props) {

  return (
    <>
      <Card className=" event-card  event-box-picture" style={{ userSelect: "none" }} key={props.id}>
        <span style={{ backgroundColor: '#2f434a', color: "white", marginLeft: '5px' }} > {props.date}  </span>
        <Card.Header style={{ color: "white", fontSize: '20px', fontFamily:"" }}>
          <strong>  {props.title} </strong>
        </Card.Header>
        <Figure>
          <Figure.Image
            width={300}
            height={180}
            alt="171x180"
            src={props.image}
            className='box-picture' />
        </Figure>

        
        <Card.Body >

          <Card.Text position-relative="true" className="section">
            {props.description}
          </Card.Text>
          <ListGroup className="list-group-flush">
              <ListGroup.Item>{props.eventLocation}</ListGroup.Item>
              <ListGroup.Item>{props.eventType}</ListGroup.Item>

          </ListGroup>
        </Card.Body>
          <Card.Body style={{margin:'auto'}}>
            
            <ButtonGeneric text={props.linkToBuy}  />
            <ButtonGeneric text={ <a target="_blank" rel="noopener noreferrer" href={props.linkToEvent} > Go Event </a>}/>
          </Card.Body>
      </Card>

    </>





  )
}
