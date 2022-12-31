import React from 'react';
import {Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '../../styles/App.css'
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <>
        <div className="header">
          
            <Navbar expand="md" fixed="top" className="header" >
              <Container>
                <Navbar.Brand className=""><Link to="/" className="title"> Nadya Poklad </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" align="end"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav >
                      <Navbar.Text > 
                      <Link to="/theartist" className="link">The Artist</Link> </Navbar.Text>
                      <NavDropdown title="Works" id="basic-nav-dropdown" className="link">
                        <NavDropdown.Item className="link"> Pianist </NavDropdown.Item>
                        <NavDropdown.Item className="link"> Compser </NavDropdown.Item>
                        <NavDropdown.Item className="link"> Musical Event Organizer </NavDropdown.Item>
                        <NavDropdown.Item className="link"> Teacher </NavDropdown.Item>
                       </NavDropdown>
                      <Navbar.Text className="link"> Engage </Navbar.Text>
                      <Navbar.Text className="link"> Upcoming events </Navbar.Text>
                      <Navbar.Text className="link"> Contact </Navbar.Text>
                      
                    </Nav>
                    <Nav className="justify-content-end link">
                     
                      Login
                    </Nav> 
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
      </>
    )

}