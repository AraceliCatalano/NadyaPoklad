import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form } from "react-bootstrap";
import ErrorMessage from "../Messages/ErrorMessage";
import '../../../styles/App.css';
import './MenuItemsContact.css'

export default function AddMenuItem({ menuItems }) {
  const [description, setDescription] = useState("");
  // const [title, setTitle] = useState('');
  // const [date, setDate]= useState("");
  // const [eventType, setEventType] = useState('');
  // const[ linkToBuy, setlinkToBuy]=useState('')
  // const[ linkToEvent, setlinkToEvent]=useState('')
  // const[ eventLocation, setEventLocation]=useState('')

  // const [active, setActive] = useState(true);
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [imageFile, setImageFile] = useState(null);
  // const [inputKey, setInputKey] = useState("");
  // const [fileValid, setFileValid] = useState(true);

  useEffect(() => {
    setError(menuItems.error);
  }, [menuItems.error]);

  useEffect(() => {
    setLoading(menuItems.loading);
  }, [menuItems.loading])

  const clearInputStates = () => {
    setDescription("");
    setError(null);
  
    // setDate('');
    // setTitle('');
    // setlinkToBuy("");
    // setlinkToEvent("");
    // setEventType("");
    // setEventLocation("");
    // setImageFile(null);
    // setInputKey(Date.now());
  };

  const submitForm = (e) => {
    e.preventDefault();
    const item = {
      description: description,
      // title:title,
      // image: null,
      // imageFileName: null,
      // date:date,
      // linkToBuy: linkToBuy,
      // linkToEvent: linkToEvent,
      // eventType:eventType,
      // eventLocation:eventLocation,
     
    };
 
    if (!formError) {
      const addedMenuItem = menuItems.addItem(item);
      if (addedMenuItem) clearInputStates();
    } else {
      setError("Form has unresolved errors!");
    }
  }

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     if (file.size < 2000000) {
  //       setFileValid(true);
  //       setFormError(false);
  //       setImageFile(file);
  //     } else {
  //       setFileValid(false);
  //       setFormError(true);
  //     }
  //   }
  // };
  
  return (
    <Form
      onSubmit={submitForm}
      className="menu-add-form"
      data-testid="add-menu-item-form"
    >
      <Row>
<Col>
      <Form.Label>Contact:</Form.Label>
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
       
      </Row>
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
