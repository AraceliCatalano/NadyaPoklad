import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Alert, Container } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import '../styles/App.css'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const { passwordReset } = useUserAuth();
    const navigate = useNavigate();
  
        const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await passwordReset(email);
            navigate("/login_admin");
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <>
            <Container fluid className="p-4 loginContainer   ">
                <h2 className='title home-h5 mx-2 mt-3 mb-3'> Reset password.</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handlePasswordReset}>
                    <FormGroup className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email address." 
                        onChange={(e) => setEmail(e.target.value)}
                        /> 
                    </FormGroup>
                    <Button variant="btn" type="submit">Reset</Button>   
                </Form>
            <hr/>    
            <Link to="/login_admin"  className="link-text">Back to Site Management</Link>
            </Container>
        </>
    )
}

export default ForgotPassword;