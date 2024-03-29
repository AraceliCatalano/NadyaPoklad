import React, { useState } from 'react';
import '../styles/App.css';
import { Button, Container, Form, FormGroup, Alert } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from '../context/UserAuthContext';

export default function LoginAdmin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container fluid className="loginContainer">
      <div className='login-title'> Site Management </div>
      <br />
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email Address"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <Button variant="btn" type="submit" size="md">
          Login
        </Button>

        <div className="p-2 text-center mb-5">
          Forgot your password ?
          <Link to="/resetPassword" className="link-text">
            - Reset -
          </Link>
        </div>
      </Form>
    </Container>
  );
  
}
