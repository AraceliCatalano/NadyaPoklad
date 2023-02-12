import React from 'react'
import '../../../styles/App.css'
import { Button, Container, Row, Col} from 'react-bootstrap';
import { useNavigate } from "react-router";
import { useUserAuth } from '../../../context/UserAuthContext';
import SideBar from './SideBar';



export  function Dashboard() {

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

        
        <Row>
          <SideBar />

          <Col sm="9" className="main-menu">
            <Container fluid>
              <Row className="mt-3">
                <Col sm={10}>
                  <Row >
                    <p style={{marginLeft: 0}}> Your are logged in with the email: {user && user.email}</p>      
                  </Row>
                </Col>
                
                <Col sm={2}>
                    <Button variant="btn"  size='md' onClick={handleLogout}>Signout</Button>
                </Col>
            </Row>
          </Container>
          
          </Col>
        </Row>


    </>
  )
}