import { Container, Row, Col } from 'react-bootstrap'
import { VideoYouTube } from '../components/VideoYouTube'
import '../../src/styles/App.css'
import useHookToRender from '../components/dashboard/FirebaseHooks/useHookToRender';

export function Perfomances() {

  const { performancesPost } = useHookToRender()
  //console.log(performancesPost )

  return (
    <>
      <h4 className='title home-h5 mx-2'>Perfomances</h4><br />
      <Container>
        <Row>
          {
            performancesPost.map(item =>
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
