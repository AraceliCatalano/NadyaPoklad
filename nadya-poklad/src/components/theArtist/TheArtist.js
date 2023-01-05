import React from 'react';
import {  Container, Image, Row, Col } from 'react-bootstrap';
import '../../styles/TheArtist.css';
import Nadya1 from './nadya1.jpg';
import Nadya2 from './nadya2.jpg';
import Nadya3 from './nadya3.jpg'

export default function TheArtist() {
  return (
    <>
    <Container fluid="sm">
      <Row>
      <h2 className='title'> The Artist </h2>
      </Row>
      <Col>
      Ukrainian composer. Pianist. Teacher of piano, composition, and musical theoretical disciplines. Laureate of international and all-ukranian competitions for young composers.
      </Col>
      <Col>
      <Image src={Nadya1} fluid className='image'/>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      <Image src={Nadya2} fluid className='image'/>
      <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
      <Image src={Nadya3} fluid className='image'/>
      <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      </Col>
      </Container>
    </>
  )
}
