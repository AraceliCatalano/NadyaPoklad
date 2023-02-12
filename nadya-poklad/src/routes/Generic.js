import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import {TheArtist , Works,Engage, UpcomingEvents, Contact, NotFound } from '../pages'


// Imports for Login with Firebase
import { UserAuthContextProvider } from '../context/UserAuthContext';
import LoginAdmin from '../pages/LoginAdmin';
import ForgotPassword from '../pages/ForgotPassword'
import { DashboardAdmin } from '../components/dashboard/pagesAdmin/DashboardAdmin';

// import TheArtist from '../pages/TheArtist';
// import Works from '../pages/Works'
// import Engage from '../pages/Engage';
// import UpcomingEventsList from '../pages/UpcomingEventsList';
// import Contact from '../pages/Contact';
// import NotFound from '../pages/NotFound';
// import ProtectedRoute from './ProtectedRoute';
// import Dashboard from '../components/dashboard/Dashboard';
// import PianistAdmin from '../components/dashboard/PianistAdmin';
// import ComposerAdmin from '../components/dashboard/pagesAdmin/ComposerAdmin';
// import MusicEventOrganizerAdmin from '../components/dashboard/MusicEventOrganizerAdmin';
// import ContactAdmin from '../components/dashboard/contactAdmin/ContactAdmin';
// import TeacherAdmin from '../components/dashboard/TeacherAdmin';
// import UpcomingEventsAdmin from '../components/dashboard/pagesAdmin/UpcomingEventsAdmin';
// import ArtistAdmin from '../components/dashboard/pagesAdmin/ArtistAdmin';




function Generic() {
  return (

   <>  
    <UserAuthContextProvider>
      <Routes>
            <Route path="/" element={<Home />} />    
            <Route exact path="/theartist" element={<TheArtist />} /> 
            <Route exact path="/works/*" element={<Works />} /> 
            <Route exact path="/upcoming_events" element={<UpcomingEvents />} />    
            <Route exact path="/engage" element={<Engage />} />    
            <Route exact path="/contact" element={<Contact />} />       
            <Route exact path="/login_admin" element={<LoginAdmin />} />
            <Route exact path="/dashboard/*" element={<DashboardAdmin/>}/>
            <Route exact path="/resetPassword" element={<ForgotPassword />} />  
            <Route path="*" element={<NotFound />} /> 
            
            {/* <Route exact path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/artist" element={ <ArtistAdmin />} />  
            <Route exact path="/dashboard/upcoming-events" element={  <UpcomingEventsAdmin /> }/> 
            <Route exact path="/dashboard/pianist" element={<ProtectedRoute> <PianistAdmin />  </ProtectedRoute>} />
            <Route exact path="/dashboard/composer" element={ <ProtectedRoute> <ComposerAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/music-event-organizer" element={<ProtectedRoute> <MusicEventOrganizerAdmin />  </ProtectedRoute>} />
            <Route exact path="/dashboard/contact" element={ <ProtectedRoute> <ContactAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/teacher" element={ <ProtectedRoute> <TeacherAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/resetPassword" element={<ForgotPassword />} />  
        
              */}
      </Routes>        
    </UserAuthContextProvider>

   </>   
  );
}

export default Generic;