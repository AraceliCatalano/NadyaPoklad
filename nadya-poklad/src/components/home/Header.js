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
                      <Navbar.Text > <Link to="/theartist" className="link link-header">The Artist</Link> </Navbar.Text>
                      <NavDropdown title="Works" id="basic-nav-dropdown" className=" link ">
                        <NavDropdown.Item className="link-dropdown ">
                          <Link to="/works/pianist" className="link-header"> 
                            Pianist 
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown ">
                          <Link to="/works/composer" className="link-header"> 
                            Composer 
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown "> 
                          <Link to="/works/musical_event_organizer" className="link-header"> 
                            Musical Event Organizer 
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown "> 
                          <Link to="/works/teacher" className="link-header"> 
                            Teacher 
                          </Link>
                        </NavDropdown.Item>
                       </NavDropdown>

                      <Navbar.Text className="link"><Link to="/engage" className="link link-header">  Engage </Link></Navbar.Text>
                      <Navbar.Text className="link"><Link to="/upcoming_events" className="link link-header">  Upcoming events </Link>  </Navbar.Text>
                      <Navbar.Text className="link"> <Link to="/contact" className="link link-header">  Contact </Link> </Navbar.Text>
                     
                    </Nav>
                    <Nav className="justify-content-end ">
                      <Navbar.Text className="link">
                      <Link to="/login_admin" className="link link-header">  Login </Link>
                      </Navbar.Text>
                    </Nav> 
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
      </>
    )

}