import React, { useState, useEffect } from "react";
import { Form, Alert, Button, Col, Row } from "react-bootstrap";
import ArtistPostService from '../../services/artist.services';
import '../../styles/App.css'
//import { getStorage, ref, uploadBytes, getDownloadURL, getBytes } from "firebase/storage";

const AddArtistItem = ({ id, setArtistPostId }) => {
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (description === "" || imageURL === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newArtistPost = {
      description,
      imageURL
    };
    console.log(newArtistPost);

    try {
      if (id !== undefined && id !== "") {
        await ArtistPostService.updateArtistPost(id, newArtistPost);
        setArtistPostId("");
        setMessage({ error: false, msg: "New post added successfully!" });
      } else {
        await ArtistPostService.addArtistPost(newArtistPost);
        setMessage({ error: false, msg: "New Post added successfully to The Artist!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setDescription("");
    setImageURL("");
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ArtistPostService.getArtistPost(id);
      console.log("The recor is:", docSnap.data());
      setDescription(docSnap.data().description);
      setImageURL(docSnap.data().imageURL);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  }

  useEffect(() => {
    console.log("The id here is:", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);


  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit} className="mb-3">
          <Form.Group className="mb-3" controlId="formArtistPostDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Add text to be displayed next to the image"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Text className="text-muted" id="formArtistPostDescription">
              Add the text that will appear next to the photo.
            </Form.Text>
          </Form.Group>

          <Row className="mb-3 form-bottom">

            <Col >
              <Form.Group className="mb-3" controlId="formArtistPostImageURL">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  value={imageURL}
                  type="text"
                  placeholder="imageURL"
                  onChange={(e) => setImageURL(e.target.value)}
                />
                <Form.Text className="text-muted" id="formArtistPostImageURL">
                  Select an image.
                </Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Button variant="btn" type="Submit"
              >
                Add/ Update
              </Button>
            </Col>
          </Row>

        </Form>
      </div>
    </>
  );
};

export default AddArtistItem;