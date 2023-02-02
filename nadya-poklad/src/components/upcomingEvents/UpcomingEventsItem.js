import React from 'react';
import '../../styles/App.css'
import { Figure,  Card, ListGroup,  } from 'react-bootstrap';

import { ButtonGeneric } from '../ButtonGeneric';


export default function UpcomingEventsItem(props) {

  return (
    <>
      <Card className=" event-card  event-box-picture " style={{ userSelect: "none" }} key={props.id}>
        <span className='event-span' > {props.date}  </span>
        <Card.Header className='event-card-title'>
          <strong>  {props.title} </strong>
        </Card.Header>
        <Figure>
          <Figure.Image
            width={300}
            height={170}
            alt="171x180"
            src={props.image}
            className='event-box-picture event-img-fluid' />
        </Figure>

        <Card.Body className='event-card-body' >
          <ListGroup className="event-list-group-flush">
             <ListGroup.Item className="event-list-group-item">{props.eventType}</ListGroup.Item>
          </ListGroup>
          <Card.Text position-relative="true" className="section-upcomingEvents mostly-customized-scrollbar">
            {props.description}
          </Card.Text>
          <ListGroup >
              <ListGroup.Item className="event-list-group-location">{props.eventLocation}</ListGroup.Item>
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
