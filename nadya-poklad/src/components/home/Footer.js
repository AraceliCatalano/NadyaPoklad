import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../styles/App.css'

export default function Footer() {
  return (
    
    <Navbar className="footerbg"  expand="lg" variant="light" fixed= "bottom" >
        <Container fluid className='footerContainer' >
           
            <Navbar.Brand className="footerbg"><Link to="/" className="title"> Nadya Poklad </Link></Navbar.Brand>
   
                <div className="">
                    <button type="button" className="btn-footer mx-2">
                        <i className="bi bi-envelope-fill icon"></i>  
                    </button>
                    <button type="button" className="btn-footer mx-2">
                        <i className="bi bi-youtube icon"></i>
                    </button>
                </div>
                    <p>Made by Araceli Catalano & Alba Morán </p>
                    <p>© Nadya Poklad</p>
        </Container>
    </Navbar>
      
     
      
   
  )
}
