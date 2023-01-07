import  {db}  from '../firebase-config';
import { collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc } from 'firebase/firestore';

const artistPostRef = collection(db, "TheArtist");

class ArtistPostService {
  addArtistPost = (newArtistPost) => {
    return addDoc(artistPostRef, newArtistPost);
  };

  updateArtistPost = (id, updatedArtistPost) => {
    const artistPostDoc = doc(db, "TheArtist", id);
    return updateDoc(artistPostDoc, updatedArtistPost);
  };

  deleteArtistPost = (id) => {
    const artistPostDoc = doc(db, "TheArtist", id);
    return deleteDoc(artistPostDoc);
  };

  getAllArtistPosts = () => {
    return getDocs(artistPostRef);
  };

  getArtistPost = (id) => {
    const artistPostDoc = doc(db, "TheArtist", id);
    return getDoc(artistPostDoc);
  };

}
      
export default new ArtistPostService();