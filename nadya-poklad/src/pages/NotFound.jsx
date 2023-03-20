import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import '../styles/App.css';


export function NotFound() {
    return (
        <Container className="not-found">
            <Row>
                <h2>Error 404 - Page not found</h2>
                <Image fliud
                    src="https://firebasestorage.googleapis.com/v0/b/nadyapokladsite.appspot.com/o/General%2FPageNotFound.jpg?alt=media&token=25849ac4-e352-4ecf-8cc2-3912aca79c11"
                    alt="not-found"
                    width="350px"
                />
            </Row>
        </Container>
    )
}

