import React from 'react';
import '../../styles/App.css'
import { Accordion, Figure, Card, ListGroup, Link } from 'react-bootstrap';


export default function UpcomingEventsItem(props) {




  return (
    <>


      <Card className=" event-card  box-picture" style={{ userSelect: "none" }} key={props.id}>

        <small style={{ backgroundColor: '#2f434a', color: "white", marginLeft: '5px' }} > {props.date}  </small>
        <Figure>
          <Figure.Image
            width={280}
            height={180}
            alt="171x180"
            src={props.image}
            className='box-picture' />
        </Figure>

        <Card.Header className="section">
          {props.title}
        </Card.Header>
        
        <Card.Body >

          <Card.Text position-relative="true" className="section">
            {props.description}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>{props.tickets}</ListGroup.Item>
            <ListGroup.Item>{props.eventType}</ListGroup.Item>

          </ListGroup>
          <Card.Body>
            <Card.Link href={props.linkToBuy}>Buy Tickets</Card.Link>
            <Card.Link href={props.linkToEvent}> Go To Event</Card.Link>
          </Card.Body>
        </Card.Body>
      </Card>

    </>





  )
}
