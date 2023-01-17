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
import NotFound from '../components/NotFound';
// TEST
import TESTADMIN from '../components/dashboard/TESTADMIN/TESTADMIN';


// Imports for Login with Firebase
import { UserAuthContextProvider } from '../context/UserAuthContext';
import LoginAdmin from '../components/loginAdmin/LoginAdmin';
import ForgotPassword from '../components/loginAdmin/ForgotPassword'
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../components/dashboard/Dashboard';
import PianistAdmin from '../components/dashboard/PianistAdmin';
import ComposerAdmin from '../components/dashboard/ComposerAdmin';
import MusicEventOrganizerAdmin from '../components/dashboard/MusicEventOrganizerAdmin';
import ContactAdmin from '../components/dashboard/contactAdmin/ContactAdmin';
import TeacherAdmin from '../components/dashboard/TeacherAdmin';
import UpcomingEventsAdmin from '../components/dashboard/UpcomingEventsAdmin';
import ArtistAdmin from '../components/dashboard/artistAdmin/ArtistAdmin';

function Generic() {
  return (

   <>  
    <UserAuthContextProvider>
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
            <Route exact path="/artist-admin" element={ <ArtistAdmin />} />  
            <Route exact path="/login_admin" element={<LoginAdmin />} />
            <Route exact path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/artist" element={ <ProtectedRoute> <ArtistAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/pianist" element={<ProtectedRoute> <PianistAdmin />  </ProtectedRoute>} />
            <Route exact path="/dashboard/composer" element={ <ProtectedRoute> <ComposerAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/music-event-organizer" element={<ProtectedRoute> <MusicEventOrganizerAdmin />  </ProtectedRoute>} />
            <Route exact path="/dashboard/contact" element={ <ProtectedRoute> <ContactAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/teacher" element={ <ProtectedRoute> <TeacherAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/dashboard/upcoming-events" element={ <ProtectedRoute> <UpcomingEventsAdmin /> </ProtectedRoute>} /> 
            <Route exact path="/resetPassword" element={<ForgotPassword />} />  
            <Route exact path="/test-admin" element={<TESTADMIN />} /> 
            <Route path="*" element={<NotFound />} />  
      </Routes>        
    </UserAuthContextProvider>

   </>   
  );
}

export default Generic;