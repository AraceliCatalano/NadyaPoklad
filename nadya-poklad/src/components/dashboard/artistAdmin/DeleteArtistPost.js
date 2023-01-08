import React from 'react';
import { Button } from 'react-bootstrap';
import '../../../styles/App.css';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../../../firebase-config';
import { toast } from "react-toastify";

export default function DeleteArtistPost( {id, imageURL}) {

    const handleDelete = async () => {
        try {
          await deleteDoc(doc(db, "TheArtist", id))
          toast("Artist post deleted successfully", {type: "success"})
          const  storageRef = ref(storage, imageURL)
          await deleteObject(storageRef)

        } catch (error) {
            toast("Error deleting post. Try again.", {type: "error"})
        }
    }

    return (
    <div>
        <Button variant="btn" onClick={handleDelete}> Delete post</Button>
      
    </div>
  )
}
