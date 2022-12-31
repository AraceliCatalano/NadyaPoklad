import React from 'react';
import {Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import '../../styles/App.css'
//import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <>
        <div className="header">
            HEADER
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Container>
            
                <Navbar.Brand >Nadya Poklad</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Navbar.Text> The Artist </Navbar.Text>
                      <NavDropdown title="Works" id="basic-nav-dropdown" className="link">
                        <NavDropdown.Item> Pianist </NavDropdown.Item>
                        <NavDropdown.Item> Compser </NavDropdown.Item>
                        <NavDropdown.Item> Musical Event Organizer </NavDropdown.Item>
                        <NavDropdown.Item> Teacher </NavDropdown.Item>
                       </NavDropdown>
                      <Navbar.Text> Engage </Navbar.Text>
                      <Navbar.Text> Upcoming events </Navbar.Text>
                      <Navbar.Text> Contact </Navbar.Text>
                      
                    </Nav>
                    <Nav className="justify-content-end">
                     
                      Login
                    </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
      </>
    )

}