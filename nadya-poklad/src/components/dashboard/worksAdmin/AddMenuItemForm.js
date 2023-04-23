import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Spinner, Form, Image } from "react-bootstrap";
import ErrorMessage from "../Messages/ErrorMessage";
import "../upcomingEventsAdmin/MenuItemsUpdatingEvents.css";
import '../../../styles/App.css';
import useWorksItems from "../FirebaseHooks/useWorksItems";

export default function AddMenuItem({ menuItems }) {

  const defaultImageUrl = "https://firebasestorage.googleapis.com/v0/b/nadyapokladsite.appspot.com/o/General%2FNP.png?alt=media&token=967d7a10-db01-44a3-83c2-fe0595197e93"
  const imageDefault = <img src={defaultImageUrl} alt="Default" />;

  const { categories } = useWorksItems()

  const [itemId, setItemId] = useState('');
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('')

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

    setCategory('');
    setDate('');
    setTitle('');
    setDescription('');
    setUrl('');
    setImageFile(null);
    setInputKey(Date.now());
    setError(null);
  };

  const submitForm = (e) => {
    e.preventDefault();
    const item = {
      category: category,
      date: date,
      title: title,
      description: description,
      url: url,
      image: null,
      imageFileName: null,


    };

    if (!formError) {
      const addedMenuItem = menuItems.addItem(item, imageFile);
      if (addedMenuItem) clearInputStates();
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
        setImageFile(defaultImageUrl)
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
        <Col>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="enabledSelect">Select a Category</Form.Label>

            <Form.Select id="enabledSelect" onChange={(e) => setCategory(e.target.value)}>
              {categories.map(cat =>
                <option key={cat}  >{cat}</option>)}
            </Form.Select>
          </Form.Group>
        </Col>
        <Col></Col>
      </Row>



      <Row>


        <Col className="menu-add-input-container">
          <Form.Label>Date</Form.Label>
          <Form.Control
            name={`${category}-date`}
            className="menu-add-form-input"
            type="date"
            placeholder=""
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <Form.Label> Title</Form.Label>
          <Form.Control
            name={`${category}-title`}
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
            name={`${category}-description`}
            className="menu-add-form-input-description "
            type="text"
            placeholder="Enter the text that will appear"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          {/* <Form.Label>category</Form.Label>
          <Form.Control
            name={`${category}-category`}
            className="menu-add-form-input"
            type="text"
            placeholder="Enter a category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          /> */}
          <Form.Label>url</Form.Label>
          <Form.Control
            name={`${category}-url`}
            className="menu-add-form-input"
            type="text"
            placeholder="Enter the url to event organizer"
            value={url}
            onChange={(e) => setUrl(e.target.value)}

          />

          <Form.Label>Image</Form.Label>
          <Form.Control
            className="menu-add-form-input"
            type="file"
            placeholder="Select an image"
            accept=".jpg, .jpeg, .png, .jfif, .mov, .mp4"
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
            {` Save in ${category}`}
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
