import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../../../firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from "react-toastify";


export default function AddArtist() {

  const [ formData, setFormData ] = useState({
    description: "",
    image: "",
    order: "",
  });

  const [ progress, setProgress ] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  }

  const handlePublish = () => {
    if(!formData.description || !formData.image || !formData.order){
      alert('Plase complete all the fields.');
      return;
    }
    const storageRef = ref(storage, `/General/${Date.now()}${formData.image.name}`);

    const uploadImage= uploadBytesResumable(storageRef, formData.image);

    uploadImage.on("state_changed",
    (snapshot) => {
      const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgress(progressPercent)
    },
    (err) => {
      console.log(err);
    },
    ()=> {
      setFormData({
        description: "",
        image: "",
        order: 0,
      });
      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) => {
        const artistPostsRef = collection(db, "TheArtist");
        addDoc(artistPostsRef, {
          description: formData.description,
          orderDisplay: formData.order,
          imageURL: url, 
        })
        .then(() => {
          toast("Post added successfully", {type: "success"});
          setProgress(0);
        })
        .catch((err) => {
          toast("Error adding article. Try again.", {type: "error"});
        })
      })
    }
    );
  }

  return (
    <>
      <h4 className="title">Add Artist Post</h4>
      <Container className="border p-3 mt-3 bg-dark">
        <h5>Artist post form</h5>
        <label>Description</label>
        <textarea 
          name="description" 
          className="form-control"
          value={formData.description}
          onChange={(e)=>handleChange(e)}
          ></textarea>

        <label>Order</label>
        <textarea 
          name="order" 
          type="number"
          className="form-control"
          placeholder='Enter a number'
          value={formData.order}
          onChange={(e)=>handleChange(e)}
          ></textarea>

        {/* Image */}

        <label>Image</label>
        <input 
          name="image" 
          className="form-control" 
          type="file" 
          accept="image/*"
          
          onChange={(e)=>handleImageChange(e)}
          />
        {/* Progress */}

        {progress === 0 ? null : (
          <div className="progress">
            <div className="progress-bar progress-bar-stripped mt-2" style={{width:`${progress}%`}}>
              {`Uploading image ${progress}%`}
            </div>
          </div>
        )}

        <Button className="form-control btn mt-2"
          onClick={handlePublish}
        > Publish </Button>

      </Container>
    </>
  )
}
