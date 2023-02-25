import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../../firebase-config';

export default function  useUpcommingEvent() {

const [UpcomingEventsPost, setUpcomingEventsPost] = useState([]);



  useEffect(() => {
    const UpcomingEventsPosttImageRef = collection(db, "UpcomingEvents");
    const queryUpcomingEventsPostI = query(UpcomingEventsPosttImageRef, orderBy('date', 'desc'));
    getDocs(queryUpcomingEventsPostI)
      .then(res => setUpcomingEventsPost(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
    // console.log(UpcomingEventsPost)
  }, []);


  return {
    UpcomingEventsPost,
    setUpcomingEventsPost,

  };
}