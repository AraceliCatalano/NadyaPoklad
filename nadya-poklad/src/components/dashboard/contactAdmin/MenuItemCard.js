import React, { useState } from "react";
import { Card, Col, Form, Button, Modal } from "react-bootstrap";
import { db } from "../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import '../../../styles/App.css';


export default function MenuItemCard({ item, deleteItem, setError, setSuccessfull }) {
  const [description, setDescription] = useState(item.description);
  const [contactType, setContactType] = useState(item.contactType);
  const [itemId, setItemId] = useState(item.id);
  const [update, setUpdate] = useState(false);
  const [cardClass, setCardClass] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState(item.description);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const itemDocRef = doc(db, "Contact", itemId);

  const handleShowConfirmDelete = () => {
    setShowConfirmDelete(true);
  }

  const handleClose = () => setShowConfirmDelete(false);
  const handleCancelDeletion = () => setShowConfirmDelete(false)
  

  const handleDelete = () => {
    deleteItem(itemId);
    setShowConfirmDelete(false);
  };

  const handleUpdate = async () => {
    const isEmptyValues = updatedDescription === "";
    const isItemsChanged = description !== updatedDescription;


    if (isItemsChanged && !isEmptyValues) {
      await updateDoc(itemDocRef, { description: updatedDescription })
        .then(() => {
          setDescription(updatedDescription);
          setSuccessfull("Item updated succesfully!");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    setUpdate(!update);
  };

  return (
    <>
    <Card className={[cardClass, 'card-edition-contact', 'mt-2', 'mb-2']} fluid  >

      <Col xs={12}>
        <Card.Body style={{ fontSize: '14px' }}   >
          <Form.Label> Contact item</Form.Label>
          <Card.Text className="menu-item-card-description-contact">
            {update ? (
              <Form>
                
                <Form.Select name="role" className="mt-2 mb-2"
                  value={contactType}
                  onChange={(e) => setContactType(e.target.value)}
                >
                  <option value="" disabled selected hidden>Select contact type</option>
                  <option value="Email">E-mail address</option>
                  <option value="Youtube">YouTube</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="TikTok">TikTok</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Twitch">Twitch</option>
                </Form.Select>

                <Form.Control
                  as="textarea" rows={2} cols={1}
                  type="text"
                  defaultValue={description}
                  placeholder="Enter the text that will appear "
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                  size="sm"
                />
              </Form>

            ) : (
              description
            )}
          </Card.Text>
        </Card.Body>
      </Col>

      <Col xs={12}>
        <Card.Body className="card-end-buttons">
          <Col style={{ margin: 'auto' }} >

            <Button onClick={handleShowConfirmDelete} variant="btn" className="mt-2 mb-3"> Delete</Button>
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
