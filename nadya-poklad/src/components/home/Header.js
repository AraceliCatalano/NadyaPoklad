import React from 'react';
import {Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '../../styles/App.css'
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <>
        <div className="header">
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Container>
            
                <Navbar.Brand ><Link to="/" className="link">Nadya Poklad</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Navbar.Text> <Link to="/" className="link">The Artist</Link> </Navbar.Text>
                      <NavDropdown title="Works" id="basic-nav-dropdown" className="link">
                        <NavDropdown.Item> <Link to="/" className="dropdown-link">Pianist</Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/" className="dropdown-link">Compser</Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/"className="dropdown-link">Musical Event Organizer</Link> </NavDropdown.Item>
                        <NavDropdown.Item> <Link to="/"className="dropdown-link">Teacher</Link> </NavDropdown.Item>
                       </NavDropdown>
                      <Navbar.Text> <Link to="/" className="link">Engage</Link> </Navbar.Text>
                      <Navbar.Text> <Link to="/" className="link">Upcoming events</Link> </Navbar.Text>
                      <Navbar.Text> <Link to="/" className="link">Contact</Link> </Navbar.Text>
                      
                    </Nav>
                    <Nav className="justify-content-end">
                     
                      <Navbar.Text> <Link to="/login" className="link" >Ingresar</Link> </Navbar.Text>
                    </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
      </>
    )

}