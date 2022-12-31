import React from 'react'
import {Navbar, Container} from 'react-bootstrap'
import '../../styles/App.css'

export default function Footer() {
  return (
    
    <Navbar className="footerbg"  expand="lg" variant="light" fixed= "bottom" >
        <Container fluid className='footerContainer' >
           
            <Navbar.Brand href="#" className="footerbg"> Nadya Poklad </Navbar.Brand>
   
                <div className="">
                    <button type="button" className="btn ">
                        <i className="bi bi-envelope-fill icon"></i>  
                    </button>
                    <button type="button" className="btn">
                        <i className="bi bi-youtube icon"></i>
                    </button>
                </div>
                    <p>Made by Araceli Catalano & Alba Morán </p>
                    <p>© Nadya Poklad</p>
        </Container>
    </Navbar>
      
     
      
   
  )
}
