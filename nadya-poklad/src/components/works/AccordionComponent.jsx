import { Accordion, Container, Row, Col } from 'react-bootstrap';

export default function AccordionComponent( { subcategory }) {
  return (
    <Container>

        <Accordion defaultActiveKey="" flush>
          {
            subcategory.map((work, index) =>
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>
                  <Col> {work.category}  </Col>
                  <Row>{work.date} - {work.title}</Row>
                </Accordion.Header>

                <Accordion.Body>
                  <Row>
                    <Col>
                      {work.description}

                    </Col>
                    <Col>
                      <img src={work.image} alt='' width={'280px'} />

                    </Col>
                  </Row>
                    
                  <a href={work.url} target="_blank">
                    {work.url}
                    </a>
                </Accordion.Body>
              </Accordion.Item>

            )
          }
        </Accordion>

      </Container>
  )
}
