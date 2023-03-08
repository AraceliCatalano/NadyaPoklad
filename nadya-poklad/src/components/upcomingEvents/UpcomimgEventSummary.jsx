import { ListGroup } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';



export const UpcomimgEventSummary = () => {

  const { UpcomingEventsPost } = useHookToRender();

  return (


    <ListGroup defaultActiveKey=''>

      {UpcomingEventsPost.map((post) =>

        <ListGroup.Item
          key={post.id}
          id={post.id}
          variant="dark">

          {`${post.date} - ${post.title}`}

        </ListGroup.Item>


      )}
      <ListGroup.Item action href={'/upcoming_events'} variant="light"> <b>View Calendar...</b></ListGroup.Item>
    </ListGroup>
  )
}

