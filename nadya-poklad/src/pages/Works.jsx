import { Navigate, Route, Routes } from 'react-router-dom';
import {  Container, Row } from 'react-bootstrap';
import { Composer, Pianist, Teacher, MusicalEventOrganizer } from '../components/works'




export function Works() {

 

  return (
    <>
      <Container>

      <Row >
        <h4 className='title home-h5 mx-2 mt-3'>Works </h4><br />
      </Row>


        <Routes>
          <Route path="pianist" element={<Pianist />} />
          <Route path="composer" element={<Composer />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="musical_event_organizer" element={<MusicalEventOrganizer />} />
          <Route path="/" element={<Navigate to="/works/Pianist" />} />
        </Routes>

      </Container>
    </>)
}