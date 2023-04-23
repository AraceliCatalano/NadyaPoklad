import React, { useState } from "react";
import { db, storage } from "../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { deleteFileFromStorage } from "../FirebaseHooks/Storage";
import { Card, Row, Col, Form, Button, Container, Modal } from "react-bootstrap";
import '../../../styles/App.css';

export default function MenuItemCard({ item, deleteItem, setError, setSuccessfull }) {
  const [description, setDescription] = useState(item.description);
  const [orderDisplay, setOrderDisplay] = useState(item.orderDisplay);
  const [image, setImage] = useState(item.image);
  const [imageFileName, setImageFileName] = useState(item.imageFileName);
  const [itemId, setItemId] = useState(item.id);
  
  const [update, setUpdate] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(item.description);
  const [updatedOrderDisplay, setUpdatedOrderDisplay] = useState(item.orderDisplay);
  const [updatedImage, setUpdatedImage] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const itemDocRef = doc(db, "TheArtist", itemId);

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(true);
  }

  const handleClose = () => setShowConfirmDelete(false);
  const handleCancelDeletion = () => setShowConfirmDelete(false)

  const handleDelete = () => {
    deleteItem(itemId, imageFileName);
    setShowConfirmDelete(false);
  };

  const handleImageUpdate = async () => {
    let path = "TheArtist/";
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

    const deleted = await deleteFileFromStorage("TheArtist/" + imageFileName);
    if (deleted) {
      setImageFileName(fileName);
    }
  };

  const handleUpdate = async () => {
    const isEmptyValues = updatedDescription === "" && updatedOrderDisplay === "";
    const isItemsChanged = description !== updatedDescription || orderDisplay !== setUpdatedOrderDisplay;

    if (updatedImage !== null) {
      handleImageUpdate();
      setUpdatedImage(null);
    }

    if (isItemsChanged && !isEmptyValues) {
      await updateDoc(itemDocRef, { description: updatedDescription, orderDisplay: updatedOrderDisplay })
        .then(() => {
          setDescription(updatedDescription);
          setOrderDisplay(updatedOrderDisplay);
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
    <>
      <Card className='card-edition-artist menu-item-card-text-event m-2'>
            <Card.Img
              variant="top"
              src={image}
              alt={description}
              className="menu-item-card-image-event"
            />
          
          <Col xs={12}>
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
              <Card.Text rows={3} className="textOverflow">
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
              <Col className="menu-item-card-row">
                <Col>
                  <Form.Label>Order display:</Form.Label>
                </Col>

                <Col>
                  {update ? (
                    <Form.Control
                      type="number"
                      defaultValue={orderDisplay}
                      step="0.01"
                      onChange={(e) => setUpdatedOrderDisplay(e.target.value)}
                      size="sm"
                    />
                  ) : (
                    <span>{orderDisplay}</span>
                  )}
                </Col>
              </Col>
            </Card.Body>
          </Col>
          
          <Col className="card-end-buttons" style={{margin:'auto'}}>
            <Row>
              <Container>
                <Button onClick={handleShowConfirmDelete} variant="btn" className="m-2" size="md">
                  Delete
                </Button>

                <Button
                  onClick={handleUpdate}
                  variant={update ? "btn" : "btn"}
                  className="m-2" size="md"
                >
                  {update ? (
                    <>Save</>
                  ) : (
                    <>Edit</>
                  )}
                </Button>
              </Container>
            </Row>
          </Col>
      </Card>

      {/* MODAL TO DISPLAY CONFIRMATION BEFORE DELETING INFORMATION */}

      <Modal show={showConfirmDelete} onHide={handleClose} className="mt-5 p-4">
        <Modal.Body>
        <h5 className="title">Do you confirm you want to delete this information?</h5>
          <p >{description}</p>
          <Modal.Footer>
            <Button onClick={handleCancelDeletion} variant="btn">
              Cancel
            </Button>
            <Button onClick={handleDelete} variant="btn">
              Yes, delete.
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
}
