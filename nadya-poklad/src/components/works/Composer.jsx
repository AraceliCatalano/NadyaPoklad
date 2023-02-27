import { Accordion, Container, Row, Col } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const Composer = () => {
  const { worksComposerPost } = useHookToRender();

  return (
    <>
      <Container>

          <AccordionComponent subcategory={worksComposerPost}/>
       
      </Container>
    </>)
}
