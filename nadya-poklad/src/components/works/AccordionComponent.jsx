import { Accordion, Container, Row, Col } from 'react-bootstrap';
import '../../styles/App.css'
export default function AccordionComponent( { subcategory }) {
  return (
    <>

        <Accordion defaultActiveKey="" flush style={{borderBottom:'1px solid #acd8ec '}}>
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
                    <Col style={{ marginLeft: '0px',  alignItems: 'flex-end',  display: 'flex',  flexDirection: 'row-reverse'}}>
                      <img src={work.image} alt='' width={'350px'} style={{boxShadow:'5px 5px 10px 0px rgba(172, 216, 236, 0.65)', borderRadius:'8px'}}/>

                    </Col>
                  </Row>
                    
                  <a href={work.url} target="_blank" style={{color: 'white'}}>
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
