import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  ProtectedRoute  from '../../../routes/ProtectedRoute';
import { PianistAdmin, ComposerAdmin, MusicEventOrganizerAdmin, ContactAdmin, TeacherAdmin, UpcomingEventsAdmin, ArtistAdmin, Dashboard } from './../pagesAdmin';
import WorksAdmin from './WorksAdmin';


export const DashboardAdmin = () => {


  
  return (

        <Routes>

          <Route exact path="/" element={  <ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
    
          <Route path="artist" element={<ProtectedRoute> <ArtistAdmin /> </ProtectedRoute>} />
          <Route path="works" element={<ProtectedRoute> <WorksAdmin /> </ProtectedRoute>} />
          <Route path="upcoming-events" element={<ProtectedRoute> <UpcomingEventsAdmin /> </ProtectedRoute>} />
          <Route  path="pianist" element={<ProtectedRoute> <PianistAdmin />  </ProtectedRoute>} />
          <Route  path="composer" element={<ProtectedRoute> <ComposerAdmin /> </ProtectedRoute>} />
          <Route  path="music-event-organizer" element={<ProtectedRoute> <MusicEventOrganizerAdmin />  </ProtectedRoute>} />
          <Route  path="contact" element={<ProtectedRoute> <ContactAdmin /> </ProtectedRoute>} />
          <Route  path="teacher" element={<ProtectedRoute> <TeacherAdmin /> </ProtectedRoute>} />


        </Routes>
      
  )
}
