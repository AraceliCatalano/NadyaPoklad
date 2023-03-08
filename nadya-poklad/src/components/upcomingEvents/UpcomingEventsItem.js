import React from 'react';
import '../../styles/App.css'
import { Figure, Card } from 'react-bootstrap';


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
          <Card.Text className="event-list-group-flush event-list-group-item">
            <span >{props.eventType} </span>
          </Card.Text>

        <Card.Body className='event-card-body' >
          <Card.Text position-relative={toString(true)} className="section-upcomingEvents mostly-customized-scrollbar">
            {props.description}
          </Card.Text>
        </Card.Body>
          <Card.Text className="event-list-group-location">
            {props.eventLocation}
          </Card.Text>
       
        <Card.Body className='card-end-buttons' >
          {props.linkToBuy}
          {props.linkToEvent}

        </Card.Body>
      </Card>

    </>





  )
}
