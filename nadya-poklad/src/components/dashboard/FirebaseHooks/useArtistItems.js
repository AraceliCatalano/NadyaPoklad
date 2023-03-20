import { useEffect, useState } from "react";
import { db, storage } from "../../../firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
 // where,
  query,
  addDoc,
  // updateDoc
} from "firebase/firestore";
import {
  ref,
  deleteObject,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";

export default function useWorksItems() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succesfull, setSuccessfull] = useState(null);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "TheArtist"));
  
    getDocs(q)
      .then((data) => {
        setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
    setLoading(false);
  }, []);

  const addItem = (item, imageFile) => {
    const storageMaxxed = checkFileCountInStorage();
    if (storageMaxxed) {
      setError("Storage is full, please delete item before adding new one.");
    } else {
      if (imageFile) {
        uploadImageToStorage(item, imageFile);
      } else {
        addItemToFirestore(item);
      }
    }
    if (error === null) return true;
    else return false;
  };

  const uploadImageToStorage = (item, imageFile) => {
    const currentTime = Date.now();
    const fileName = `${currentTime}-${imageFile.name}`;
    item.imageFileName = fileName;
    const storageRef = ref(storage, "TheArtist/" + fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        setError(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          item.image = downloadURL;
          if (item.image !== null) {
            addItemToFirestore(item);
          }
        });
      }
    );
  };

  const addItemToFirestore = async (item) => {
    await addDoc(collection(db, "TheArtist"), item)
      .then((docRef) => {
        item.id = docRef.id;
        setData((prevState) => [...prevState, item]);
        setSuccessfull("Item uploaded succesfully!");
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const checkFileCountInStorage = () => {
    const listRef = ref(storage, "TheArtist");
    let maxxed = false;
    listAll(listRef)
      .then((response) => {
        let maxCountOfItems = 20;
        const ItemsMaxxed =
          response.items.length >= maxCountOfItems ||
          data.length >= maxCountOfItems;
        if (ItemsMaxxed) maxxed = true;
      })
      .catch((error) => {
        setError(error.message);
      });
    return maxxed;
  };

  const deleteItem = async (itemId, imageFileName) => {
    if (imageFileName === null) {
      const docDeleted = deleteDocFromFirestore(itemId);
      if (docDeleted) {
        const newData = data.filter((item) => item.id !== itemId);
        setData(newData);
        setSuccessfull("Item succesfully deleted!");
        setError(null);
      }
    } else {
      const deleted = deleteObjectFromStorage(imageFileName);
      if (deleted) {
        const docDeleted = deleteDocFromFirestore(itemId);
        if (docDeleted) {
          const newData = data.filter((item) => item.id !== itemId);
          setData(newData);
          setSuccessfull("Item succesfully deleted!");
          setError(null);
        }
      } else {
        setSuccessfull(null);
        setError("Could not delete image file from storage.");
      }
    }
  };

  const deleteDocFromFirestore = async (itemId) => {
    let deleted = false;
    const itemDoc = doc(db, "TheArtist", itemId);
    await deleteDoc(itemDoc)
      .then(() => {
        deleted = true;
      })
      .catch((error) => {});
    return deleted;
  };

  const deleteObjectFromStorage = async (imageFileName) => {
    let deleted = false;
    const fileRef = ref(storage, "TheArtist/" + imageFileName);
    await deleteObject(fileRef)
      .then(() => {
        deleted = true;
      })
      .catch((error) => {});
    return deleted;
  };

  return {
    data,
    setData,
    error,
    loading,
    succesfull,
    deleteItem,
    addItem,
  };
}
