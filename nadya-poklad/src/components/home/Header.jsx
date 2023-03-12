import React, { useContext, useState} from 'react';
import { useNavigate } from "react-router";
import { Navbar, NavDropdown, Nav, Container, Offcanvas, OffcanvasHeader, Button } from 'react-bootstrap';
import '../../styles/App.css'
import { Link, Navigate } from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';



export const  Header = ( ) => {


  const {user, logOut } = useUserAuth();
  const navigate = useNavigate();
  const [logged, setLogged] = useState('')
  const [show, setShow] = useState(true);
  const userInfo =(user)

  // console.log(userInfo?.email)


  const userLogged = ( userInfo  ) =>{
     setLogged(userInfo?.email)
     console.log(logged)

    }
  

  const handleLogout = async () => {
    try {
        await logOut();
        setLogged(false)
        navigate("/login_admin");
    } catch (err) { 
        console.log(err.message);
    };
}


  

  const handleClose = () => setShow(false);
  

  return (
    <>
      <OffcanvasHeader  show={toString(show)}>
        {[false, 'md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-0 header" fixed="top">
            <Container fluid>
              <Navbar.Brand><Link to="/" className="title home-h4"> Nadya Poklad </Link> </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Text > <Link to="/" className="link link-header">Home</Link> </Navbar.Text>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav onClick={handleClose} className="justify-content-end flex-grow-1 pe-3">
                    <Navbar.Text > <Link to="/theartist" className="link link-header">The Artist</Link> </Navbar.Text>
                    <NavDropdown
                      title="Works"
                      className="link"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                     <NavDropdown.Item className="link-dropdown ">
                          <Link to="/works/pianist" className="link-header">Pianist</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown">
                          <Link to="/works/composer" className="link-header">Composer</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown "> 
                          <Link to="/works/musical_event_organizer" className="link-header">Musical Event Organizer</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item className="link-dropdown "> 
                          <Link to="/works/teacher" className="link-header">Teacher</Link>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Navbar.Text className="link"><Link to="/engage" className="link link-header">  Engage </Link></Navbar.Text>
                      <Navbar.Text className="link"><Link to="/upcoming_events" className="link link-header">  Upcoming events </Link>  </Navbar.Text>
                      <Navbar.Text className="link"> <Link to="/contact" className="link link-header">  Contact </Link> </Navbar.Text>
                     
                   
                    <Nav className="justify-content-end ">

                    {  
                         !(userInfo && userInfo.email)
                         
                      ?
                      <Navbar.Text className="link">
                         <Link to="/login_admin" className="link link-header">  Login </Link>
                      </Navbar.Text>
                      :
                      <>
                         <Navbar.Text className="link"> <Link to="/dashboard" className="link link-header">  Dashboard </Link> </Navbar.Text>
                         <Navbar.Text className="link" onClick={handleLogout} > Sign Out     </Navbar.Text>
                       </>
                                            
                    }
                    </Nav> 
                    </Nav> 
                  

                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </OffcanvasHeader>
    </>
  )

}
export default Header;

