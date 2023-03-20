import React from 'react'
import { Container, Row, Col , Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/App.css'

export function  Footer () {
  return (
    <footer>
   <Navbar className="footer my-5 " fixed>
      <Container className="footerbg " >
        <Navbar.Brand href="#home" className="title footerBrand ">Nadya Poklad</Navbar.Brand>
       
           <Navbar.Text  className="">
              <Row className=" "   >
                <Col className=" "   >
                  <Link as="button" className="btn-footer footerbg ">
                        <i className="bi bi-envelope-fill icon mx-1"></i>
                  </Link>
                </Col>
                <Col className=" col-xs-12"   >
                  <Link as="button" className="btn-footer footerbg ">
                        <i className="bi bi-youtube icon mx-1"></i>
                  </Link>
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
