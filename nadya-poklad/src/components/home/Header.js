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
                      <Navbar.Text > <Link to="/theartist" className="link">The Artist</Link> </Navbar.Text>
                      <NavDropdown title="Works" id="basic-nav-dropdown" className="link">
                        <NavDropdown.Item className="link">
                          <Link to="/works/pianist" className="link"> 
                            Pianist 
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link">
                          <Link to="/works/composer" className="link"> 
                            Composer 
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link"> 
                          <Link to="/works/musical_event_organizer" className="link"> 
                            Musical Event Organizer 
                          </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link"> 
                          <Link to="/works/teacher" className="link"> 
                            Teacher 
                          </Link>
                        </NavDropdown.Item>
                       </NavDropdown>

                      <Navbar.Text className="link"><Link to="/engage" className="link">  Engage </Link></Navbar.Text>
                      <Navbar.Text className="link"><Link to="/upcoming_events" className="link">  Upcoming events </Link>  </Navbar.Text>
                      <Navbar.Text className="link"> <Link to="/contact" className="link">  Contact </Link> </Navbar.Text>
                     
                    </Nav>
                    <Nav className="justify-content-end link">
                      <Link to="/login_admin" className="link">  Login </Link>
                    </Nav> 
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        </div>
      </>
    )

}