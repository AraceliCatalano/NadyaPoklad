import React, { useState, useEffect } from "react";
import { Form, Alert, Button, Row, Col } from "react-bootstrap";
import ContactService from "../../../services/contact.services";
import '../../../styles/App.css';

const AddConactItem = ({ id, setContactPostId }) => {
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (contact === "") {
      setMessage({ error: true, msg: "Complete the contact field" });
      return;
    };

    const newContactPost = {
      contact
    };
  

    try {
      if (id !== undefined && id !== "") {
        await ContactService.updateContactPost(id, newContactPost);
        setContactPostId("");
        setMessage({ error: false, msg: "New contact added successfully!" });
      } else {
        await ContactService.addContactPost(newContactPost);
        setMessage({ error: false, msg: "New contact added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setContact("");

  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ContactService.getContactPost(id);
      console.log("The recor is:", docSnap.data());
      setContact(docSnap.data().contact);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  }

  useEffect(() => {
   // console.log("The id here is:", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);


  return (
    <>
      <Row className="contact-form-container">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}
        <Form onSubmit={handleSubmit} className="mb-3 contact-form">
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="formArtistPostDescription">
              <Form.Label>Conatct information</Form.Label>
              <Form.Control
                type="text"
                placeholder="Add text to be displayed next to the image"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <Form.Text className="text-muted" id="formArtistPostDescription">
                Add any contact information here.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col sm={2} className="mb-3 form-bottom">
            <Button variant="btn" type="Submit">
              Add/ Update
            </Button>
          </Col>
          
        </Form>
      </Row>
    </>
  );
};

export default AddConactItem;