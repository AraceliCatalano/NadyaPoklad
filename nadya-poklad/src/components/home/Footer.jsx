import React from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import '../../styles/App.css'

export function Footer() {
  return (
    <footer>
      <Navbar className="footer my-5 " fixed=''>
        <Container className="footerbg " >
          <Navbar.Brand href="#home" className="title footerBrand ">Nadya Poklad</Navbar.Brand>

          <Navbar.Text className="">
            <Row className=" "   >
              <Col className=" "   >
                <a href='mailto:pokladweb@gmail.com' type='email' target='_blank' rel="noopener noreferrer" className="btn-footer footerbg ">

                  <i className="bi bi-envelope-fill icon mx-1"></i>

                </a>

              </Col>
              <Col className=" col-xs-12"   >

              <a className="btn-footer footerbg " target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/@nadiiapoklad1533'>

                  <i className="bi bi-youtube icon mx-1"></i>

              </a>
               
              </Col>
            </Row>
            <p>Made by Araceli Catalano & Alba Morán </p>
            <p>© Nadya Poklad</p>
          </Navbar.Text>

        </Container>
      </Navbar>
    </footer>

  )
}
