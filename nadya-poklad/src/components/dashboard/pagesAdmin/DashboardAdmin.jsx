import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from '../../../routes/ProtectedRoute';
import { ContactAdmin, UpcomingEventsAdmin, ArtistAdmin, Dashboard } from './../pagesAdmin';
import WorksAdmin from './WorksAdmin';

export const DashboardAdmin = () => {

  return (
    <Routes>
      <Route exact path="/" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
      <Route path="artist" element={<ProtectedRoute> <ArtistAdmin /> </ProtectedRoute>} />
      <Route path="works" element={<ProtectedRoute> <WorksAdmin /> </ProtectedRoute>} />
      <Route path="upcoming-events" element={<ProtectedRoute> <UpcomingEventsAdmin /> </ProtectedRoute>} />
      <Route path="contact" element={<ProtectedRoute> <ContactAdmin /> </ProtectedRoute>} />
    </Routes>
  )
}
