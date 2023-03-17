import { Container, Row, Col } from 'react-bootstrap'
import { VideoYouTube } from '../components/VideoYouTube'
import '../../src/styles/App.css'
import useHookToRender from '../components/dashboard/FirebaseHooks/useHookToRender';



export function Engage() {

  const { engagePost } = useHookToRender()


  return (
    <>
      
        <h4 className='title home-h4 mx-2'>Engages</h4><br />
      

      <Container>
        <Row>
      {
        engagePost.map(item =>
        <Col key={item.id} className='video-item'>


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
