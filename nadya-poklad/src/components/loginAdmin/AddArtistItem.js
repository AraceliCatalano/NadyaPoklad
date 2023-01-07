import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ArtistPostService from '../../services/artist.services';

const AddArtistItem = ({id, setArtistPostId}) => {
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [status, setStatus] = useState("Published");
  const [flag, setFlag] = useState(true);
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
      imageURL,
      status
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

    const editHandler = async() => {
        setMessage("");
        try {
            const docSnap = await ArtistPostService.getArtistPost(id);
            console.log("The recor is:", docSnap.data());
            setDescription(docSnap.data().description);
            setImageURL(docSnap.data().imageURL);
            setStatus(docSnap.data().status);
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    }

    useEffect(() => {
        console.log("The id here is:", id);
        if(id !== undefined && id !== "") {
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

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formArtistPostDescription">
            <InputGroup>
              <InputGroup.Text id="formArtistPostDescription">Description</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Add text to be displayed next to the image"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formArtistPostImageURL">
            <InputGroup>
              <InputGroup.Text id="formArtistPostImageURL">A</InputGroup.Text>
              <Form.Control
                value={imageURL}
                type="text"
                placeholder="imageURL"
                onChange={(e) => setImageURL(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
          <Button
              disabled={flag}
              variant="btn"
              onClick={(e) => {
                setStatus("Published");
                setFlag(true);
              }}
            >
              Published
            </Button>
            <Button
              variant="btn"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Published");
                setFlag(false);
              }}
            >
              Not Published
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="btn" type="Submit"
           >
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddArtistItem;