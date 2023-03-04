import { Navigate, Route, Routes } from 'react-router-dom';
import { Container, Row  } from 'react-bootstrap';
import { Composer, Pianist, Teacher, MusicalEventOrganizer } from '../components/works'
import '../styles/App.css';
import WorksComponent from '../../src/components/works/WorksComponent'
import { WorksTabs } from '../Assests/data/WorksTabs';

export default function Works() {
  return (
    <>
      <Container>
        <h1>Works</h1>
        <Row className='mb-5'>
          <WorksComponent tabs={WorksTabs}  />
        </Row>

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
