import { Accordion, Container, Row, Col } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const Pianist = () => {
  const { worksPianistPost } = useHookToRender();

  return (
    
    <>
      <Row >
        <h4 className='title home-h4 mx-2 mt-3'>Pianist</h4><br />
      </Row>

      <AccordionComponent subcategory={worksPianistPost} />

    </>
    )
}
