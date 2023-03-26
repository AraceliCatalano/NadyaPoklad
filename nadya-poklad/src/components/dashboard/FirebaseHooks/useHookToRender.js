import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, where } from 'firebase/firestore';
import { db } from '../../../firebase-config';

export default function useHookToRender() {

  const [UpcomingEventsPost, setUpcomingEventsPost] = useState([]);
  const [worksPianistPost, setworksPianistPost] = useState([]);
  const [worksComposerPost, setWorksComposerPost] = useState([]);
  const [worksTeacherPost, setWorksTeacherPost] = useState([]);
  const [worksMusicalOrganizerPost, setWorksMusicalOrganizerPost] = useState([]);
  const [performancesPost, setPerformancesPost] = useState([]);
  const [contactPost, setContactPost] = useState([]);

  useEffect(() => {
    const UpcomingEventsPosttImageRef = collection(db, "UpcomingEvents");
    const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef, orderBy('date', 'desc'));
    getDocs(queryUpcomingEventsPostI)
      .then(res => setUpcomingEventsPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);

  useEffect(() => {
    const worksPosted = collection(db, "Works");
    const queryWorksPost = query(worksPosted, where("category", "==", "Composer"));
    getDocs(queryWorksPost)
      .then(res => setWorksComposerPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);
  useEffect(() => {
    const worksPosted = collection(db, "Works");
    const queryWorksPost = query(worksPosted, where("category", "==", "Pianist"));
    getDocs(queryWorksPost)
      .then(res => setworksPianistPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);
  useEffect(() => {
    const worksPosted = collection(db, "Works");
    const queryWorksPost = query(worksPosted, where("category", "==", "Teacher"));
    getDocs(queryWorksPost)
      .then(res => setWorksTeacherPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);
  useEffect(() => {
    const worksPosted = collection(db, "Works");
    const queryWorksPost = query(worksPosted, where("category", "==", "Musical Event Organizer"));
    getDocs(queryWorksPost)
      .then(res => setWorksMusicalOrganizerPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);
  useEffect(() => {
    const worksPosted = collection(db, "Works");
    const queryWorksPost = query(worksPosted, where("category", "==", "Performances"));
    getDocs(queryWorksPost)
      .then(res => setPerformancesPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);

  useEffect(() => {
    const worksPosted = collection(db, "Contact");
    const queryContactPost = query(worksPosted);
    getDocs(queryContactPost)
      .then(res => setContactPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));

  }, []);



  return {
    UpcomingEventsPost, setUpcomingEventsPost,
    worksComposerPost, setWorksComposerPost,
    worksPianistPost, setworksPianistPost,
    worksTeacherPost, setWorksTeacherPost,
    worksMusicalOrganizerPost, setWorksMusicalOrganizerPost,
    performancesPost, setPerformancesPost,
    contactPost, setContactPost

  };
}