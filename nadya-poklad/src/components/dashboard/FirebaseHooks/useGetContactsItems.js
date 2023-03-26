import { useEffect, useState } from "react";
import { db, storage } from "../../../firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  query,
  addDoc,
  } from "firebase/firestore";
import {
  ref,
  // deleteObject,
  // uploadBytesResumable,
  // getDownloadURL,
  listAll,
} from "firebase/storage";

export default function useGetContactsItems() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [succesfull, setSuccessfull] = useState(null);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "Contact")); 

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


  const addItem = (item) => {
    const storageMaxxed = checkFileCountInStorage();

    if (storageMaxxed) {
      setError("Storage is full, please delete item before adding new one.");
    } else {
        addItemToFirestore(item);
      }
    
    if (error === null) return true;
    else return false;
  }
  

  
  const addItemToFirestore = async (item) => {
       await addDoc(collection(db, "Contact"), item)
      .then((docRef) => {
       item.id = docRef.id;
        setData((prevState) => [...prevState, item]);
        setSuccessfull("contact uploaded succesfully!");
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const checkFileCountInStorage = () => {
    const listRef = ref(storage, "Contact");
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

  const deleteItem = async (itemId) => {
   
      const docDeleted = deleteDocFromFirestore(itemId);
      if (docDeleted) {
        const newData = data.filter((item) => item.id !== itemId);
        setData(newData);
        setSuccessfull("Item succesfully deleted!");
        setError(null);
      }
    else {
     
        const docDeleted = deleteDocFromFirestore(itemId);
        if (docDeleted) {
          const newData = data.filter((item) => item.id !== itemId);
          setData(newData);
          setSuccessfull("Item succesfully deleted!");
          setError(null);
        }
      else {
        setSuccessfull(null);
        setError("Could not delete file from storage.");
      }
    }
  };

  const deleteDocFromFirestore = async (itemId) => {
    let deleted = false;
    const itemDoc = doc(db, "Contact", itemId);
    await deleteDoc(itemDoc)
      .then(() => {
        deleted = true;
      })
      .catch((error) => {});
    return deleted;
  };

  // const deleteObjectFromStorage = async (imageFileName) => {
  //   let deleted = false;
  //   const fileRef = ref(storage, "UpcomingEvents/" + imageFileName);
  //   await deleteObject(fileRef)
  //     .then(() => {
  //       deleted = true;
  //     })
  //     .catch((error) => {});
  //   return deleted;
  // };

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

