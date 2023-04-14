import React, { useState } from "react";
import { db, storage } from "../../../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { deleteFileFromStorage } from "../FirebaseHooks/Storage";
import { Card, Col, Form, Button, Modal, Row } from "react-bootstrap";
import '../../../styles/App.css';
import useWorksItems from "../FirebaseHooks/useWorksItems";


export default function MenuItemCard({ item, deleteItem, setError, setSuccessfull }) {

  let { 
    categories, 
    showConfirmDelete, 
    update, 
    setUpdate, 
    setShowConfirmDelete,
    validateUrl,
    handleShowConfirmDelete, 
    handleClose, 
    handleCancel, 
    handleCancelDeletion } = useWorksItems()
  


  const [itemId, setItemId] = useState(item.id);
  const [category, setCategory] = useState(item.category)
  const [date, setDate] = useState(item.date)
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [url, setUrl] = useState(item.url)
  const [image, setImage] = useState(item.image);
  const [imageFileName, setImageFileName] = useState(item.imageFileName);

  const [updatedCategory, setUpdatedCategory] = useState(item.category)
  const [updatedDate, setUpdatedDate] = useState(item.date)
  const [updatedTitle, setUpdatedTitle] = useState(item.title);
  const [updatedDescription, setUpdatedDescription] = useState(item.description);
  const [updatedUrl, setUpdatedUrl] = useState(item.url)
  const [updatedImage, setUpdatedImage] = useState(null);
  const [urlError, setUrlError ] = useState(false)
  const urlRegex = /^https?:\/\/\S+$/i;  //para validar la direccion URL que completa el campo
  

  const itemDocRef = doc(db, "Works", itemId);

  

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
          setTimeout(() => {
            setSuccessfull(null);
          }, 5000);
        })
        .catch((error) => {
          setError(error.message);
        });
    };
    setUpdate(!update);
  };
   
  const imageDefault = "https://firebasestorage.googleapis.com/v0/b/nadyapokladsite.appspot.com/o/General%2FNP.png?alt=media&token=967d7a10-db01-44a3-83c2-fe0595197e93"

  const handleChangeImageInput = (e) => {
    const file =   e.target.files[0] 

    if (file) {
      setImage(URL.createObjectURL(file))
    } 
  
    setUpdatedImage(file)
    }
  

   
  return (
    <>
      <Card className= 'card-edition-works menu-item-card-text-event" mt-1 mb-1' >
        <Card.Img
          variant="top"
          src={image}
          alt={title}
          className="menu-item-card-image-event"
        />
         {
            (updatedCategory !== "Performances") 
              &&
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
           }

        <Col xs={12}>
          <Card.Body style={{ fontSize: '14px' }} className=' card-body-event  '>
            <Form.Label className='me-2'>Title:</Form.Label>
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
          <Card.Body style={{ fontSize: '14px' }} className=' card-body-event '>
            <Form.Label className='me-2'>Date:</Form.Label>
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
                <Form.Group className="mb-1">
                  <Form.Select id="enabledSelect" onChange={(e) => setUpdatedCategory(e.target.value)} value={updatedCategory}>
                    {categories.map(cat => <option key={cat} >{cat}</option>)}
                  </Form.Select>
                </Form.Group>

              ) : (
                category
              )}
            </Card.Text>
          </Card.Body>
        </Col>

        <Col xs={12} >
          <Card.Body style={{ fontSize: '14px' }} className='card-body-event'>
            <Form.Label>url:</Form.Label>
            {
              (updatedCategory === "Performances")
              &&
              <Card.Text  >
                { update ? (
                  <Form.Control
                    type="text"
                    size="sm"
                    defaultValue={url}
                    placeholder="Enter url o link "
                    onChange={
                      (e) => {
                        setUpdatedUrl(e.target.value)
                        setUrlError(!validateUrl(e.target.value));
                        validateUrl(e.target.value)
                    
                    }}
                    isInvalid={urlError}
                    required
                  />
                  
                ) : (
                 url
                  )}
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid URL.
                  </Form.Control.Feedback>
              </Card.Text>
            }
           { 
           (updatedCategory !== "Performances")
           &&
            <Card.Text  >
              {update ? (
                <Form.Control
                  type="text"
                  defaultValue={url}
                  placeholder="Enter url o link "
                  onChange={(e) => setUpdatedUrl(e.target.value)}
                  size="sm"
                />
              )
                : (
                  url
                )}
            </Card.Text>
          }
          </Card.Body>
          
        </Col>

        <Col xs={12}>
          <Card.Body style={{ fontSize: '14px' }}  className='card-body-event'>
            <Form.Label>description</Form.Label>
            <Card.Text className='textOverflow'  >
              {update ? (
                <Form.Control 
                  type="textarea " 
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
          <Card.Body className="card-end-buttons">
            <Col style={{ margin: 'auto' }} >
              <Button onClick={handleShowConfirmDelete} variant="btn" className="mt-2 mb-3 me-2">  <b> Delete </b> </Button>
              
              {update &&
               <Button onClick={handleCancel} variant="btn" className="mt-2 mb-3 mx-2">   Cancel  </Button>
             }


              {update 
                ? 
                <Button
                onClick={handleUpdate}
                variant={update ? "btn" : "btn"}
                className="mt-2 mx-2 mb-3">
                  <>Save</>
                </Button>
                
                :
                <Button
                onClick={handleUpdate}
                variant={update ? "btn" : "btn"}
                className="mt-2 mx-2 mb-3"> 
                  <>Edit</>
                </Button>
                }
               
            </Col>
          </Card.Body>
        </Col>
      </Card>

      {/* MODAL TO DISPLAY CONFIRMATION BEFORE DELETING INFORMATION */}

      <Modal show={showConfirmDelete} onHide={handleClose} className="mt-5 p-4">
        <Modal.Body>
          <h5 className="title">Do you confirm you want to delete this information?</h5>
          {description}
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
