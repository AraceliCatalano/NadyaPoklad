import { Container, Row, Col } from 'react-bootstrap'
import { VideoYouTube } from '../components/VideoYouTube'
import '../../src/styles/App.css'
import useHookToRender from '../components/dashboard/FirebaseHooks/useHookToRender';



export function Engage() {

  const { engagePost } = useHookToRender()


  return (
    <>
      <Row >
        <h4 className='title home-h4 mx-2 mt-3'>Engages</h4><br />
      </Row>

      <Container>
        <Row>
      {
        engagePost.map(item =>
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
