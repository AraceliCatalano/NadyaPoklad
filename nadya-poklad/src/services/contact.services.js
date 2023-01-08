import  {db}  from '../firebase-config';
import { collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc } from 'firebase/firestore';

const contactPostRef = collection(db, "Contact");

class ContactService {
  addContactPost = (newContactItem) => {
    return addDoc(contactPostRef, newContactItem);
  };

  updateContactPost = (id, updatedContactPost) => {
    const contactPostDoc = doc(db, "Contact", id);
    return updateDoc(contactPostDoc, updatedContactPost);
  };

  deleteContactPost = (id) => {
    const contactPostDoc = doc(db, "Contact", id);
    return deleteDoc(contactPostDoc);
  };

  getAllContactPosts = () => {
    return getDocs(contactPostRef);
  };

  getContactPost = (id) => {
    const contactPostDoc = doc(db, "Contact", id);
    return getDoc(contactPostDoc);
  };

}
      
export default new ContactService();