import { Accordion, Container, Row, Col } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const Pianist = () => {
  const { worksPianistPost } = useHookToRender();

  return (
    
    <Container>

      <AccordionComponent subcategory={worksPianistPost} />

    </Container>
    )
}
