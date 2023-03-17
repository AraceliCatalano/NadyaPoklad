import { Accordion,  Row, Col } from 'react-bootstrap';
import '../../styles/App.css'

export default function AccordionComponent( { subcategory }) {
  return (
    <>

        <Accordion defaultActiveKey={0}  alwaysOpen >
          {
            subcategory.map((work, index) =>
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  {/* <Col> {work.category}  </Col> */}
                  <Row>{work.date} - {work.title}</Row>
                </Accordion.Header>

                <Accordion.Body>
                  <Row>
                    <Col>
                      {work.description}

                    </Col>
                    <Col className='accordion-col-img'>
                      <img src={work.image} alt='' className='accordion-img' />
                    </Col>
                  </Row>
                    
                  <a href={work.url} target="_blank" rel="noreferrer" style={{color: 'white'}}>
                    {work.url}
                    </a>
                </Accordion.Body>
              </Accordion.Item>

            )
          }
        </Accordion>

      </>
  )
}
