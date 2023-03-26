/**
 * Add Artist Post item to Firestore database
 */

import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form, Image } from "react-bootstrap";

import ErrorMessage from "../Messages/ErrorMessage";
import "./MenuItemsPage.css";
import '../../../styles/App.css';

export default function AddMenuItem({ menuItems }) {
  const [description, setDescription] = useState("");
  const [orderDisplay, setOrderDisplay] = useState(0);
  //const [active, setActive] = useState(true);
  const [imageFile, setImageFile] = useState(null);
  const [inputKey, setInputKey] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileValid, setFileValid] = useState(true);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    setError(menuItems.error);
  }, [menuItems.error]);

  useEffect(() => {
    setLoading(menuItems.laoding);
  }, [menuItems.loading])

  const clearInputStates = () => {
    setDescription("");
    setOrderDisplay(0);
    setImageFile(null);
    setInputKey(Date.now());
    setError(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const item = {
      description: description,
      orderDisplay: orderDisplay,
      image: null,
      imageFileName: null,
    };
    if (!formError) {
      const addedMenuItem = menuItems.addItem(item, imageFile);
      if (addedMenuItem) {
        clearInputStates();
        // Agregar la función de Cancel/Close Add Item form acá también
      };
    } else {
      setError("Form has unresolved errors!");
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size < 2000000) {
        setFileValid(true);
        setFormError(false);
        setImageFile(file);
      } else {
        setFileValid(false);
        setFormError(true);
      }
    }
  };
  
  return (
    <Form
      onSubmit={submitForm}
      className="menu-add-form mt-4"
      data-testid="add-menu-item-form"

    >
      <Row>
        <Col className="menu-add-input-container">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea" rows={4} cols={50}
            name="artist-description"
            className="menu-add-form-input"
            type="text"
            placeholder="Enter the text that will appear next to the image"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Form.Label>Order Display</Form.Label>
          <Form.Control
            className="menu-add-form-input"
            type="number"
            step="1"
            min="0"
            placeholder="Enter the order display"
            value={orderDisplay}
            onChange={(e) => setOrderDisplay(e.target.value)}
            required
          />
          <Form.Label>Image</Form.Label>
          <Form.Control
            className="menu-add-form-input"
            type="file"
            accept=".jpg, .jpeg, .png, .jfif"
            key={inputKey}
            onChange={(e) => handleFileChange(e)}
            isInvalid={!fileValid}
          />
          <Form.Control.Feedback type="invalid">
            File size is too big! Maximum size of file is 2mb.
          </Form.Control.Feedback>
         
        </Col>
        <Col className="menu-item-container-image-preview">
          <Form.Label>Preview image:</Form.Label>
          <Container className="menu-item-card-preview">
            {imageFile !== null && (
              <Image
                className="preview-image"
                width="auto"
                height="250px"
                src={URL.createObjectURL(imageFile)}
              />
            )}
          </Container>
        </Col>
      </Row>
      <Row>
        <Col className="menu-form-submit-container">
          <Button
            variant="btn"
            type="submit"
            data-testid="submit-button"
          >
            Save new post
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
