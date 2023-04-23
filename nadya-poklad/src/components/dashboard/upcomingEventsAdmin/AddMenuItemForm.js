import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form, Image } from "react-bootstrap";
import ErrorMessage from "../Messages/ErrorMessage";
import "./MenuItemsUpdatingEvents.css";
import '../../../styles/App.css';

export default function AddMenuItem({ menuItems }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState("");
  const [date, setDate]= useState("");
  const [eventType, setEventType] = useState('');
  const[ linkToBuy, setlinkToBuy]=useState('')
  const[ linkToEvent, setlinkToEvent]=useState('')
  const[ eventLocation, setEventLocation]=useState('')

  // const [active, setActive] = useState(true);
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
    setLoading(menuItems.loading);
  }, [menuItems.loading])

  const clearInputStates = () => {
  
    setDate('');
    setTitle('');
    setDescription("");
    setlinkToBuy("");
    setlinkToEvent("");
    setEventType("");
    setEventLocation("");
    setImageFile(null);
    setInputKey(Date.now());
    setError(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const item = {
      title:title,
      description: description,
      image: null,
      imageFileName: null,
      date:date,
      linkToBuy: linkToBuy,
      linkToEvent: linkToEvent,
      eventType:eventType,
      eventLocation:eventLocation,
     
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
      className="menu-add-form"
      data-testid="add-menu-item-form"
    >
      <Row>
       
        <Col className="menu-add-input-container">
         <Form.Label>Date</Form.Label>
         <Form.Control
           name="upcomingEvents-date"
           className="menu-add-form-input"
           type="date"
           placeholder=""
           value={date}
           onChange={(e) => setDate(e.target.value)}
           required
         />
         <Form.Label>Event Title</Form.Label>
          <Form.Control
            name="upcomingEvents-title"
            className="menu-add-form-input"
            type="text"
            placeholder="Enter the text that will appear as a Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea" rows={4} cols={50}
            name="upcomingEvents-description"
            className="menu-add-form-input-description "
            type="text"
            placeholder="Enter the text that will appear bellow the image"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Form.Label>Free Show / Paid Event</Form.Label>
          <Form.Control
            name="upcomingEvents-eventType"
            className="menu-add-form-input"
            type="text"
            placeholder="Enter 'Free' or 'Pay'"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            required
          />
          <Form.Label>Link to Event</Form.Label>
          <Form.Control
            name="upcomingEvents-linkToEvent"
            className="menu-add-form-input"
            type="text"
            placeholder="Enter the url to event organizer"
            value={linkToEvent}
            onChange={(e) => setlinkToEvent(e.target.value)}
            required
          />
          <Form.Label>Link to Buy Tickets</Form.Label>
          <Form.Control
            name="upcomingEvents-linkToBuy"
            className="menu-add-form-input"
            type="text"
            placeholder="Enter the url to buy tickets"
            value={linkToBuy}
            onChange={(e) => setlinkToBuy(e.target.value)}
            required
          />
          <Form.Label>Event Location</Form.Label>
          <Form.Control
            name="upcomingEvents-eventLocationy"
            className="menu-add-form-input"
            type="text"
            placeholder="Enter the adress/location of Event"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
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
