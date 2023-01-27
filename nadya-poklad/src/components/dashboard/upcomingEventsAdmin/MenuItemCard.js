import React, { useState, useEffect } from "react";

import { db, storage } from "../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { deleteFileFromStorage } from "./FirebaseHooks/Storage";

import { Card, Row, Col, Form, Button } from "react-bootstrap";

import '../../../styles/App.css';

export default function MenuItemCard({ item, deleteItem, setError, setSuccessfull }) {
  const [description, setDescription] = useState(item.description);
  const [orderDisplay, setOrderDisplay] = useState(item.orderDisplay);
  const [image, setImage] = useState(item.image);
  const [imageFileName, setImageFileName] = useState(item.imageFileName);
  const [active, setActive] = useState(item.active);
  const [itemId, setItemId] = useState(item.id);
  const [cardClass, setCardClass] = useState("");
  const [update, setUpdate] = useState(false);
  const [eventLocation, setEventLocation] = useState(item.eventLocation);
  const [updatedDescription, setUpdatedDescription] = useState(item.description);
  const [title, setTitle] = useState(item.title);
  const [updatedTitle, setUpdatedTitle] = useState(item.title)
  const [updatedEventLocation, setUpdatedEventLocation] = useState(item.eventLocation)




  const [updatedOrderDisplay, setUpdatedOrderDisplay] = useState(item.orderDisplay);
  const [updatedImage, setUpdatedImage] = useState(null);
  const itemDocRef = doc(db, "UpcomingEvents", itemId);

  useEffect(() => {
    toggleCardClass();
  }, [active]);

  const updateItemActivityToDb = async (e) => {
    let newActive = e.target.checked;
    setActive(newActive);
    const itemDocRef = doc(db, "UpcomingEvents", itemId);
    await updateDoc(itemDocRef, { active: newActive })
      .then(() => { setSuccessfull("Item updated succesfully!") })
      .catch((error) => { setError(error.message) });
  };

  const toggleCardClass = () => {
    if (active) setCardClass("menu-item-card-active");
    else setCardClass("menu-item-card-disabled");
  };

  const handleDelete = () => {
    deleteItem(itemId, imageFileName);
  };

  const handleImageUpdate = async () => {
    let path = "UpcomingEvents/";
    const currentTime = Date.now();
    let fileName = `${currentTime}-${updatedImage?.name}`;

    const storageRef = ref(storage, path + fileName);
    const uploadTask = uploadBytesResumable(storageRef, updatedImage);
    uploadTask.on(
      "state_changed",
      (snapshot) => { },
      (error) => {
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          updateDoc(itemDocRef, { image: downloadURL });
          setImage(downloadURL);
          setError(null);
        });
      }
    );

    const deleted = await deleteFileFromStorage("UpcomingEvents/" + imageFileName);
    if (deleted) {
      setImageFileName(fileName);
    }
  };

  const handleUpdate = async () => {
    const isEmptyValues = updatedDescription === "" && updatedOrderDisplay === "" && updatedTitle === "" && updatedEventLocation === "";
    const isItemsChanged = description !== updatedDescription || orderDisplay !== setUpdatedOrderDisplay || title !== updatedTitle || eventLocation!== updatedEventLocation;

    if (updatedImage !== null) {
      handleImageUpdate();
      setUpdatedImage(null);
    }

    if (isItemsChanged && !isEmptyValues) {
      await updateDoc(itemDocRef, { description: updatedDescription, orderDisplay: updatedOrderDisplay, title: updatedTitle , eventLocation: updatedEventLocation})
        .then(() => {
          setDescription(updatedDescription);
          setOrderDisplay(updatedOrderDisplay);
          setTitle(updatedTitle);
          setUpdatedEventLocation(updatedEventLocation);

          setSuccessfull("Item updated succesfully!");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    setUpdate(!update);
  };

  const handleChangeImageInput = (e) => {
    let file = e.target.files[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
    setUpdatedImage(file)
  }

  return (
    <Card className={["menu-item-card", cardClass]}>
      <Row>
        <Col>
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="menu-item-card-image"
          />
        </Col>
        <Col>
        <Row>
        <Form.Label>Title:</Form.Label>
        <Card.Title rows={3}>
          {update ? (
            <Form.Control
              type="text"
              defaultValue={updatedTitle}
              placeholder="Enter a new Title"
              onChange={(e) => setUpdatedTitle(e.target.value)}
              size="sm"

            />
          ) : (
            title
          )}
        </Card.Title>
        </Row>

        </Col>
  <Row>
    
        <Col xs={6}>
          <Card.Body className="menu-item-card-body">
            <Form.Label>Description:</Form.Label>
            {update === true && (
              <Form.Control
                type="file"
                onChange={(e) => handleChangeImageInput(e)}
                id="input-update-image"
                accept=".jpg, .jpeg, .png, .jfif"
                size="sm"
              />
            )}
            <Card.Text rows={3}>
              {update ? (
                <Form.Control
                  type="text"
                  defaultValue={description}
                  placeholder="Enter the text that will appear next to the image"
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  size="sm"

                />
              ) : (
                description
              )}
            </Card.Text>
          </Card.Body>
        </Col>
  </Row>
  <Row>

  
        <Col xs={6}>
          <Card.Body className="menu-item-card-body">
            <Form.Label>Location:</Form.Label>
            {update === true && (
              <Form.Control
              type="text"
              defaultValue={eventLocation}
              placeholder="Enter the text that will appear next to the image"
              onChange={(e) => setUpdatedEventLocation(e.target.value)}
              size="sm"
              />
            )}
            <Card.Text rows={3}>
              {update ? (
                <Form.Control
                  type="text"
                  defaultValue={eventLocation}
                  placeholder="Enter the text that will appear next to the image"
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  size="sm"

                />
              ) : (
                eventLocation
              )}
            </Card.Text>









            <Col className="menu-item-card-row">
              <Col>
                <Form.Label>Order display:</Form.Label>
              </Col>
              <Col>

                {update ? (
                  <Form.Control
                    type="number"
                    defaultValue={orderDisplay}
                    step="1"
                    onChange={(e) => setUpdatedOrderDisplay(e.target.value)}
                    size="sm"
                  />
                ) : (
                  <span>{orderDisplay}</span>
                )}
              </Col>
            </Col>

            {/* <Row className="menu-item-card-row">
              <Col>
                <Form.Label>Visible:</Form.Label>
              </Col>
              <Col>
                <Form.Check
                  type="switch"
                  checked={active}
                  onChange={(e) => updateItemActivityToDb(e)}
                ></Form.Check>
              </Col>
            </Row> */}

          </Card.Body>
        </Col>
        
  </Row>    
        
        
        <Col >
          <Row>

          


            <Button onClick={handleDelete} variant="btn" className="mt-2">
              Delete
            </Button>

            <Button
              onClick={handleUpdate}
              variant={update ? "btn" : "btn"}
              className="mt-2"
            >
              {update ? (
                <>Save</>
              ) : (
                <>Edit</>
              )}
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
