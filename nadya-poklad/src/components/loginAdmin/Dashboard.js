import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/App.css'
import { Button, Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useUserAuth } from '../../context/UserAuthContext';



export default function Dashboard() {

  const {user, logOut} = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
      try {
          await logOut();
          navigate("/login_admin");
      } catch (err) { 
          console.log(err.message);
      };
  }

  return (
    <>
    
    <Container fluid>
      <Row>
        <Col sm={10}>
          <Row >
            <h2 className='title'>Site Management</h2>
            <p style={{marginLeft: 0}}> Your are logged in with the email: {user && user.email}</p>    
            
          </Row>
        </Col>
        
        <Col sm={2}>
            <Button variant="btn"  size='md' onClick={handleLogout}>Signout</Button>
        </Col>
    </Row>
    </Container>

    <Row>
      <Col sm="3" className="side-menu">
        <Row className='side-row-title'> <h3 className="title">Site sections</h3></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">The artist</Link></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">Pianist</Link></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">Composer</Link></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">Teacher</Link></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">Musical event organizer</Link></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">Upcoming events</Link></Row>
        <Row className='side-row'> <Link to="/dashboard" className="link-text">Contact</Link></Row>
      </Col>

      <Col sm="9" className="main-menu">
        <Row>
          <h4>Create new content for The Artist section</h4>
    
        </Row>
        <Row>
          <p>Current posts showing:</p>
          
          
        </Row>
      </Col>
    </Row>
    </>
  )
}