import { Navigate, Route, Routes } from 'react-router-dom';
import {   Container } from 'react-bootstrap';
import {  Composer, Pianist, Teacher, MusicalEventOrganizer  } from '../components/works'

import '../styles/App.css';


export function Works() {


  return (
    <>
      <Container>


        <Routes>
          <Route path="pianist" element={<Pianist />} />
          <Route path="composer" element={<Composer />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="musical_event_organizer" element={<MusicalEventOrganizer />} />
          <Route path="/" element={<Navigate to="/works/Pianist" />} />
        </Routes>
        
      </Container>

   
    </>
  )
}
