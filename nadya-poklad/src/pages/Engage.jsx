import { Container, Row, Col } from 'react-bootstrap'
import { VideoYouTube } from '../components/VideoYouTube'
import '../../src/styles/App.css'



export function Engage() {

  const items = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/GyLnhdHSjYY",
      title: 'Nadya Poklad- Imagination'
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/dLk9pzmaFHY",
      title: 'Nadya Poklad- Hallelujah'
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/hKgcHjq1xKQ",
      title: 'Nadya Poklad- Hallelujah'
    }

  ];

  return (
    <>
      <Row >
        <h4 className='title home-h4 mx-2 mt-3'>Engages</h4><br />
      </Row>

      <Container>
        <Row>
      {
        items.map(item =>
        <Col className='video-item'>


                <VideoYouTube
                                  
                  url={item.url}
                  title={item.title} />
        </Col>
        )
      }
              </Row>
      </Container>


    </>
  )
}
