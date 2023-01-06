import React from 'react'
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
    <h2 className='title'>Site Management</h2>
    <Container fluid>
      <Row>
        <Col sm={10}>
            Welcome to your admin page.
            <Row >
              <p style={{marginLeft: 0}}> Your are logged in with email: {user && user.email}</p>    
            </Row>
        </Col>
        
        <Col sm={2}>
            <Button variant="btn"  size='md' onClick={handleLogout}>Signout</Button>
        </Col>
    </Row>
    </Container>
    </>
  )
}