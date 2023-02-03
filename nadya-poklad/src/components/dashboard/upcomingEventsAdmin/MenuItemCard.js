import React, { useState, useEffect } from "react";

import { db, storage } from "../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { deleteFileFromStorage } from "./FirebaseHooks/Storage";

import { Card, Row, Col, Form, Button } from "react-bootstrap";

import '../../../styles/App.css';

export default function MenuItemCard({ item, deleteItem, setError, setSuccessfull }) {

  const [image, setImage] = useState(item.image);
  const [imageFileName, setImageFileName] = useState(item.imageFileName);
  const [active, setActive] = useState(item.active);
  const [itemId, setItemId] = useState(item.id);
  const [cardClass, setCardClass] = useState("");
  const [update, setUpdate] = useState(false);
  const [date, setDate] = useState(item.date)
  const [description, setDescription] = useState(item.description);
  const [eventType, setEventType] = useState(item.eventType);
  const [eventLocation, setEventLocation] = useState(item.eventLocation);
  const [linkToBuy, setLinkToBuy] = useState(item.linkToBuy);
  const [linkToEvent, setLinkToEvent] = useState(item.linkToEvent);

  const [updatedDate, setUpdatedDate] = useState(item.date)
  const [updatedDescription, setUpdatedDescription] = useState(item.description);
  const [title, setTitle] = useState(item.title);
  const [updatedTitle, setUpdatedTitle] = useState(item.title)
  const [updatedEventLocation, setUpdatedEventLocation] = useState(item.eventLocation)
  const [updatedEventType, setUpdatedEventType] = useState(item.eventType)
  const [updatedLinkToBuy, setUpdatedLinkToBuy] = useState(item.linkToBuy)
  const [updatedLinkToEvent, setUpdatedLinkToEvent] = useState(item.linkToEvent)


  const [updatedOrderDisplay, setUpdatedOrderDisplay] = useState(item.orderDisplay);
  const [updatedImage, setUpdatedImage] = useState(null);
  const itemDocRef = doc(db, "UpcomingEvents", itemId);

  useEffect(() => {
    toggleCardClass();
  }, [active]);


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
    const isEmptyValues = updatedDate === "" && updatedDescription === "" && updatedTitle === "" && updatedEventLocation === "" && updatedEventType === "" && updatedLinkToBuy === "" && updatedLinkToEvent === "";
    const isItemsChanged = date !== updatedDate || description !== updatedDescription || title !== updatedTitle || eventLocation !== updatedEventLocation || eventType !== updatedEventType || linkToBuy !== updatedLinkToBuy || linkToEvent !== updatedLinkToEvent;

    if (updatedImage !== null) {
      handleImageUpdate();
      setUpdatedImage(null);
    }

    if (isItemsChanged && !isEmptyValues) {
      await updateDoc(itemDocRef, { date: updatedDate, description: updatedDescription, title: updatedTitle, eventType: updatedEventType, eventLocation: updatedEventLocation, linkToBuy: updatedLinkToBuy, linkToEvent: updatedLinkToEvent })
        .then(() => {
          setDate(updatedDate);
          setTitle(updatedTitle);
          setDescription(updatedDescription);
          setEventType(updatedEventType);
          setEventLocation(updatedEventLocation);
          setLinkToBuy(updatedLinkToBuy);
          setLinkToEvent(updatedLinkToEvent);

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
    <Card className={[cardClass, 'card-edition', "menu-item-card-text-event", 'mt-2', 'mb-2']} >
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        className="menu-item-card-image-event"

      />

      <Col xs={12}>
        <Card.Body style={{ fontSize: '12px' }} className=' card-body-event  '>
          <Form.Label>Title:</Form.Label>
          <Card.Title style={{ fontSize: '14px' }} className='card-body-event mt-1 mb-'>
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
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body style={{ fontSize: '12px' }} className=' card-body-event '>
          <Form.Label>Date:</Form.Label>
          <Card.Title xs={12} style={{ fontSize: '14px' }} className='card-body-event mt-1 mb-'>
            {update ? (
              <Form.Control
                type="date"
                defaultValue={updatedDate}
                placeholder=""
                onChange={(e) => setUpdatedDate(e.target.value)}
                size="sm"
              />
            ) : (
              date
            )}
          </Card.Title>
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }} className='card-body-event '>
          <Form.Label className="form-label">Location:</Form.Label>
          <Card.Text  >
            {update ? (
              <Form.Control
                type="text"
                defaultValue={eventLocation}
                placeholder="Enter the text that will appear "
                onChange={(e) => setUpdatedEventLocation(e.target.value)}
                size="sm"

              />
            ) : (
              eventLocation
            )}
          </Card.Text>
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }} className='card-body-event'>
          <Form.Label>Event type:</Form.Label>
          <Card.Text  >
            {update ? (
              <Form.Control
                type="text"
                defaultValue={eventType}
                placeholder="Enter 'Free' or 'Pay'"
                onChange={(e) => setUpdatedEventType(e.target.value)}
                size="sm"

              />
            ) : (
              eventType
            )}
          </Card.Text>
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }} className='card-body-event'>
          <Form.Label>Link to Buy Tickets:</Form.Label>
          <Card.Text  >
            {update ? (
              <Form.Control
                type="text"
                defaultValue={linkToBuy}
                placeholder="Enter the text that will appear "
                onChange={(e) => setUpdatedLinkToBuy(e.target.value)}
                size="sm"

              />
            ) : (
              linkToBuy
            )}
          </Card.Text>
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }} className='card-body-event'>
          <Form.Label>Link to Event:</Form.Label>
          <Card.Text  >
            {update ? (
              <Form.Control
                type="text"
                defaultValue={linkToEvent}
                placeholder="Enter the text that will appear "
                onChange={(e) => setUpdatedLinkToEvent(e.target.value)}
                size="sm"

              />
            ) : (
              linkToEvent
            )}
          </Card.Text>
        </Card.Body>
      </Col>


      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }} className='card-body-event'  >
          <Form.Label>Image and Description:</Form.Label>
          {update === true && (
            <Form.Control
              type="file"
              onChange={(e) => handleChangeImageInput(e)}
              id="input-update-image"
              accept=".jpg, .jpeg, .png, .jfif"
              size="sm"
            />
          )}
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }} className='card-body-event'  >
          <Card.Text className="menu-item-card-description-event">
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

      <Col xs={12}>
        <Card.Body className="card-end-buttons">
          <Col style={{ margin: 'auto'  }} >


            <Button onClick={handleDelete} variant="btn" className="mt-2 mb-3">   Delete  </Button>

            <Button
              onClick={handleUpdate}
              variant={update ? "btn" : "btn"}
              className="mt-2 mx-2 mb-3"
              >
              {update ? (
                <>Save</>
                ) : (
                  <>Edit</>
                  )}
            </Button>

          </Col>

        </Card.Body>
      </Col>  


    </Card>


  );
}
