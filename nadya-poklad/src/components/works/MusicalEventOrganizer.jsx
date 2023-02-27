import { Accordion, Container, Row, Col } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const MusicalEventOrganizer = () => {
  const { worksMusicalOrganizerPost } = useHookToRender();

  return (
    <Container>

      <AccordionComponent subcategory={worksMusicalOrganizerPost} />

    </Container>
  )
}
