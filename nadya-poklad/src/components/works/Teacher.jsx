import { Accordion, Container, Row, Col } from 'react-bootstrap';
import useHookToRender from '../dashboard/FirebaseHooks/useHookToRender';
import AccordionComponent from './AccordionComponent';



export const Teacher = () => {
  const { worksTeacherPost } = useHookToRender();

  return (
    <>
      <Container>

        <Container>

          <AccordionComponent subcategory={worksTeacherPost} />

        </Container>

      </Container>
    </>)
}
