import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import '../styles/App.css';
import UpcomingEventsItem from '../components/upcomingEvents/UpcomingEventsItem';
import { ButtonGeneric } from '../components/ButtonGeneric';
import useHookToRender from '../components/dashboard/FirebaseHooks/useHookToRender';


export function UpcomingEvents( ) {

  const {UpcomingEventsPost} = useHookToRender();

  return (
    <>


      <Container fluid="sm">
      <Row>
      <h4 className='title home-h5 mt-3'> Upcoming Events</h4><br/>
      </Row>
      </Container>

      <Container >
        <p>
          Schedule of next Performances during 2023. I would like to enjoy it with you!
        </p>
       
      </Container>


      <Container className='container-list' >

        {UpcomingEventsPost.length === 0 ? " No Events at Moment " :
        <CardGroup>


          <Row className='container-list g-4 mb-3' xs={1} sm={2} md={3} lg={4} >

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
                    post.eventType === "Free" ? <span >  {"- Free Event -"} </span>
                      :
                      <ButtonGeneric text=<a target="_blank" rel="noopener noreferrer" href={post.linkToBuy}> Buy Ticket </a> />



                  }
                  linkToEvent={post.linkToEvent === ""
                    ?
                    <button disabled={true} style={{ display: 'none' }}>-</button>
                    :
                    <ButtonGeneric text={<a target="_blank" rel="noopener noreferrer" href={post.linkToEvent}> Go Event </a>} />

                  } />




              </Col>
            )}
          </Row>


        </CardGroup>
        }
      </Container>


    </>
  )
}
