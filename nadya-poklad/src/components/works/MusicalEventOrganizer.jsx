import {  Row } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const MusicalEventOrganizer = () => {
  const { worksMusicalOrganizerPost } = useHookToRender();

  return (
    <>
        <h4 className='title home-h5 mx-2 mt-3'>Musical event organizer</h4><br />
      <Row >
      </Row>

      <AccordionComponent subcategory={worksMusicalOrganizerPost} />
    </>

    
  )
}
