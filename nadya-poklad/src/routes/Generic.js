import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import TheArtist from '../components/theArtist/TheArtist';
import Works from '../components/works/Works';
import Composer from '../components/works/Composer';
import Pianist from '../components/works/Pianist';
import Teacher from '../components/works/Teacher'
import MusicalEventOrganizaer from '../components/works/MusicalEventOrganizer'
import Engage from '../components/engage/Engage';
import UpcomingEvents from '../components/upcomingEvents/UpcomingEvents';
import Contact from '../components/contact/Contact';
import LoginAdmin from '../components/loginAdmin/LoginAdmin';
import Dashboard from '../components/loginAdmin/Dashboard';
import NotFound from '../components/NotFound';


function Generic() {
  return (

   <>  
   
      <Routes>
            <Route path="/" element={<Home />} />    
            <Route exact path="/theartist" element={<TheArtist />} /> 
            <Route exact path="/works" element={<Works />} />    
            <Route exact path="/works/pianist" element={<Pianist />} />    
            <Route exact path="/works/composer" element={<Composer />} />    
            <Route exact path="/works/teacher" element={<Teacher />} />    
            <Route exact path="/works/musical_event_organizer" element={<MusicalEventOrganizaer />} />    
            <Route exact path="/upcoming_events" element={<UpcomingEvents />} />    
            <Route exact path="/engage" element={<Engage />} />    
            <Route exact path="/contact" element={<Contact />} />    
            <Route exact path="/login_admin" element={<LoginAdmin />} /> 
            <Route exact path="/admin" element={<Dashboard />} /> 
            <Route path="*" element={<NotFound />} />  
      </Routes>        
    

   </>   
  );
}

export default Generic;