import React from 'react'
import '../../styles/App.css'
import {Button , Container, Form} from 'react-bootstrap';


export default function LoginAdmin() {
  return (
    <Container fluid className="loginContainer">
    
       <div className='login-title'>   Site Management </div> 
       
       <br/>
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <Button variant="btn" type="submit" size='md' >
        Login
      </Button>
    </Form>
    </Container>
  )
}
