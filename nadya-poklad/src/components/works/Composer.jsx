import { Accordion, Container, Row, Col } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const Composer = () => {
  const { worksComposerPost } = useHookToRender();

  return (
    <>
      <Container>
      <Row >
        <h4 className='title home-h4 mx-2 mt-3'>Composer</h4><br />
      </Row>

          <AccordionComponent subcategory={worksComposerPost}/>
       
      </Container>
    </>)
}
