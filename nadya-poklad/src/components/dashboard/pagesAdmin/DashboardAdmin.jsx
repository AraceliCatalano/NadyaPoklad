import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  ProtectedRoute  from '../../../routes/ProtectedRoute';
import { PianistAdmin, ComposerAdmin, MusicEventOrganizerAdmin, ContactAdmin, TeacherAdmin, UpcomingEventsAdmin, ArtistAdmin, Dashboard } from './../pagesAdmin';
// import PianistAdmin from '../components/dashboard/PianistAdmin';
// import ComposerAdmin from '../components/dashboard/ComposerAdmin';
// import MusicEventOrganizerAdmin from '../components/dashboard/MusicEventOrganizerAdmin';
// import ContactAdmin from '../components/dashboard/contactAdmin/ContactAdmin';
// import TeacherAdmin from '../components/dashboard/TeacherAdmin';
// import UpcomingEventsAdmin from '../components/dashboard/upcomingEventsAdmin/UpcomingEventsAdmin';
// import ArtistAdmin from '../components/dashboard/artistAdmin/ArtistAdmin';


export const DashboardAdmin = () => {
  return (


    
  
        <Routes>

          <Route exact path="/dashboard" element={  <ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
    
          <Route path="artist" element={<ArtistAdmin />} />
          <Route path="upcoming-events" element={<UpcomingEventsAdmin />} />
          <Route  path="pianist" element={<ProtectedRoute> <PianistAdmin />  </ProtectedRoute>} />
          <Route  path="composer" element={<ProtectedRoute> <ComposerAdmin /> </ProtectedRoute>} />
          <Route  path="music-event-organizer" element={<ProtectedRoute> <MusicEventOrganizerAdmin />  </ProtectedRoute>} />
          <Route  path="contact" element={<ProtectedRoute> <ContactAdmin /> </ProtectedRoute>} />
          <Route  path="teacher" element={<ProtectedRoute> <TeacherAdmin /> </ProtectedRoute>} />


        </Routes>
      
  )
}
