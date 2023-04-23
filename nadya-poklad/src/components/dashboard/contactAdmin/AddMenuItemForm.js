import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import ErrorMessage from "../Messages/ErrorMessage";
import '../../../styles/App.css';
import './MenuItemsContact.css'

export default function AddMenuItem({ menuItems, setAddMenuItemVisible }) {
  const [description, setDescription] = useState("");
  const [contactType, setContactType] = useState('');

  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(menuItems.error);
  }, [menuItems.error]);

  useEffect(() => {
    setLoading(menuItems.loading);
  }, [menuItems.loading])

  const clearInputStates = () => {
    setDescription("");
    setContactType('');
    setError(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const item = {
      description: description,
      contactType: contactType,
    };

    if (!formError) {
      const addedMenuItem = menuItems.addItem(item);
      if (addedMenuItem) {
        clearInputStates();
        setAddMenuItemVisible(false);
      }
    } else {
      setError("Form has unresolved errors!");
    }
  }


  return (
    <Form
      onSubmit={submitForm}
      className="menu-add-form"
      data-testid="add-menu-item-form"
    >

      <Col>
      <Form.Label className="mt-3">Complete the following fields to add a new contact item:</Form.Label>
        <Form.Select name="role" className="mt-2 mb-2" 
          value={contactType}
          onChange={(e) => setContactType(e.target.value)}
        >
          <option value="" disabled selected hidden>Select contact type</option>
          <option value="Email">E-mail address</option>
          <option value="Youtube">YouTube</option>
          <option value="SocialMedia">Social media</option>
          {/* {errorType.error && <Form.Label> {errorType.msg} </Form.Label>} */}
        </Form.Select>

        
        <Form.Control
          as="textarea" rows={2} cols={1}
          name="contact-description"
          className="menu-add-form-input-description "
          type="text"
          placeholder="Enter the text that will appear"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </Col>

      <Row>
        <Col className="menu-form-submit-container">
          <Button
            variant="btn"
            type="submit"
            data-testid="submit-button"
          >
            Save new Contact
          </Button>
          {loading ? (
            <Spinner
              variant="btn"
              animation="border"
              role="loading"
              className="menu-form-spinner"
            />
          ) : null}
        </Col>
      </Row>
      {error !== null && (
        <Row>
          <ErrorMessage message={error} />
        </Row>
      )}
    </Form>
  );
}
