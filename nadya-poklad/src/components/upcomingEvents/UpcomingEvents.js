import React from 'react';
import '../../styles/App.css'

import Event1 from './Event1.jpg'
import Event2 from './Event2.jpg'
import UpcomingEventsItem from './UpcomingEventsItem';

export default function UpcomingEvents(props) {
  return (
 <>
      <UpcomingEventsItem 
      image={Event1}
      event="Concert Piano At Museum"
      date="12/01/2023"
      description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" 
      />

       <UpcomingEventsItem 
      image={Event2}
      date="25/03/2023"
      event="Piano with Orchestra At Theatre"
      description= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />


 </>
  )
}
