import React from 'react'
import { Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function SideBar() {
  return (
    <>       
      <Col sm="3" className="side-menu p-4">
        <Row className='side-row-title'> <h3 className="title"><Link to="/dashboard" className="link">Site Management</Link></h3></Row>
        <Row className='side-row'> <Link to="/dashboard/artist" className="link-text">The artist</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/works" className="link-text">Works</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/pianist" className="link-text">Pianist</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/composer" className="link-text">Composer</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/teacher" className="link-text">Teacher</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/music-event-organizer" className="link-text">Musical event organizer</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/upcoming-events" className="link-text">Upcoming events</Link></Row>
        <Row className='side-row'> <Link to="/dashboard/contact" className="link-text">Contact</Link></Row>
      </Col>
    </>
  )
}
