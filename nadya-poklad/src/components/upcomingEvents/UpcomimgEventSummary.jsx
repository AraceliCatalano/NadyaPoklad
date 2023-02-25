import { ListGroup} from 'react-bootstrap';
import useUpcommingEvent from '../dashboard/FirebaseHooks/useUpcommingEvent';



export const UpcomimgEventSummary=() =>{

    const {UpcomingEventsPost} = useUpcommingEvent();

  return (


      <ListGroup defaultActiveKey=''>

    {UpcomingEventsPost.map((post) =>
    <div key={post.id}>
        <ListGroup.Item 
            
            id={post.id}   
            variant="dark">

              {`${post.date} - ${post.title}`}

        </ListGroup.Item>
          
    </div>
    )}
    <ListGroup.Item  action href={'/upcoming_events'} variant="light"> <b>View Calendar...</b></ListGroup.Item>
    </ListGroup>  
  )
}

