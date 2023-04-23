import React, { useState } from "react";
import { db, storage } from "../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { deleteFileFromStorage } from "../FirebaseHooks/Storage";
import { Card, Col, Form, Button, Modal } from "react-bootstrap";
import '../../../styles/App.css';
import useWorksItems from "../FirebaseHooks/useWorksItems";

export default function MenuItemCard({ item, deleteItem, setError, setSuccessfull }) {

  let { categories } = useWorksItems()

  const [itemId, setItemId] = useState(item.id);
  const [cardClass, setCardClass] = useState("");
  const [category, setCategory] = useState(item.category)
  const [date, setDate] = useState(item.date)
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [url, setUrl] = useState(item.url)
  const [image, setImage] = useState(item.image);
  const [imageFileName, setImageFileName] = useState(item.imageFileName);

  const [update, setUpdate] = useState(false);
  const [updatedCategory, setUpdatedCategory] = useState(item.category)
  const [updatedDate, setUpdatedDate] = useState(item.date)
  const [updatedTitle, setUpdatedTitle] = useState(item.title);
  const [updatedDescription, setUpdatedDescription] = useState(item.description);
  const [updatedUrl, setUpdatedUrl] = useState(item.url)
  const [updatedImage, setUpdatedImage] = useState(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const itemDocRef = doc(db, "Works", itemId);

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
    let path = `works/${category}/`;
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

    const deleted = await deleteFileFromStorage(path + imageFileName);
    if (deleted) {
      setImageFileName(fileName);
    }
  };

  const handleUpdate = async () => {
    const isEmptyValues = updatedCategory === "" && updatedDate === "" && updatedTitle === "" && updatedDescription === "" && updatedUrl === "";
    const isItemsChanged = category !== updatedCategory || date !== updatedDate || title !== updatedTitle || description !== updatedDescription || url !== updatedUrl;

    if (updatedImage !== null) {
      handleImageUpdate();
      setUpdatedImage(null);
    };

    if (isItemsChanged && !isEmptyValues) {
      await updateDoc(itemDocRef, {
        category: updatedCategory,
        date: updatedDate,
        title: updatedTitle,
        description: updatedDescription,
        url: updatedUrl,

      })
        .then(() => {
          setCategory(updatedCategory);
          setDate(updatedDate);
          setTitle(updatedTitle);
          setDescription(updatedDescription);
          setUrl(updatedUrl);

          setSuccessfull("Item updated succesfully!");
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    setUpdate(!update);
  };
  const imageDefault = <img src="https://firebasestorage.googleapis.com/v0/b/nadyapokladsite.appspot.com/o/General%2FNP.png?alt=media&token=967d7a10-db01-44a3-83c2-fe0595197e93" alt="default_image" />

  const handleChangeImageInput = (e) => {
    let file = e.target.files[0] || imageDefault;
    if (file) {
      setImage(URL.createObjectURL(file))
    }
    setUpdatedImage(file)
  }

  return (
    <>
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
            <Form.Label htmlFor="enabledSelect">Select a Category</Form.Label>
            <Card.Text  >
              {update ? (
                <Form.Group className="mb-3">
                  <Form.Select id="enabledSelect" onChange={(e) => setUpdatedCategory(e.target.value)}>
                    {categories.map(cat => <option key={cat} >{cat}</option>)}
                  </Form.Select>
                </Form.Group>

              ) : (
                category
              )}
            </Card.Text>
          </Card.Body>
        </Col>

        <Col xs={12}>
          <Card.Body style={{ fontSize: '14px' }} className='card-body-event'>
            <Form.Label>url:</Form.Label>
            <Card.Text  >
              {update ? (
                <Form.Control
                  type="text"
                  defaultValue={url}
                  placeholder="Enter url o link "
                  onChange={(e) => setUpdatedUrl(e.target.value)}
                  size="sm"
                />
              ) : (
                url
              )}
            </Card.Text>
          </Card.Body>
        </Col>

        <Col xs={12}>
          <Card.Body style={{ fontSize: '14px' }} className='card-body-event'>
            <Form.Label>description</Form.Label>
            <Card.Text className="textOverflow" >
              {update ? (
                <Form.Control
                  type="textarea"
                  defaultValue={description}
                  placeholder="Enter the text that will appear "
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
          <Card.Body style={{ fontSize: '14px' }} className='card-body-event'  >
            <Form.Label>Image </Form.Label>
            {update === true && (
              <Form.Control
                type="file"
                placeholder="Select an image"
                onChange={(e) => handleChangeImageInput(e)}
                id="input-update-image"
                accept=".jpg, .jpeg, .png, .jfif"
                size="sm"
              />
            )}
          </Card.Body>
        </Col>

        <Col xs={12}>
          <Card.Body className="card-end-buttons">
            <Col style={{ margin: 'auto' }} >
              <Button onClick={handleShowConfirmDelete} variant="btn" className="mt-2 mb-3">   Delete  </Button>
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
