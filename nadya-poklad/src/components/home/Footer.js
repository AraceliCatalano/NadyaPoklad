import React from 'react'
import { Container, Row, Col , Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/App.css'

export default function Footer() {
  return (
   <Nav className='footer'>
    <Container fluid className='footerContainer footerbg' >
        <Row className=" col-xs-12 "   >
            <Link to="/" className="title footerbrand"> Nadya Poklad </Link>
        </Row>
        <Col className=" col-xs-12"   >
        <Row className=" col-xs-12"   >
            <Link as="button" className="btn-footer footerbg ">
                    <i className="bi bi-envelope-fill icon mx-3"></i>
                    <i className="bi bi-youtube icon mx-3"></i>
            </Link>
            
        </Row>
        </Col>
                <p>Made by Araceli Catalano & Alba Morán </p>
                <p>© Nadya Poklad</p>
    </Container>
  
    </Nav>
   
  )
}
