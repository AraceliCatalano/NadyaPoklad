import SectionItem from './SectionItem'
import imageComposer from '../../Assests/images/Composer.jpg'
import imagePianist from '../../Assests/images/Pianist.jpg'
import imageTeacher from '../../Assests/images/Teacher.jpg'
import imageEngage from '../../Assests/images/Engage.jpg'
import imageContact from '../../Assests/images/PianoContact.jpg'
import {Row, Col, Container} from 'react-bootstrap'

function Home () {

    return (
       <> 
        <Container  className=' responsive-Row'>
        <Row className='col-xs-12 col-md-12'>
            <hr/>
            <h4 className='home-h4'> Works </h4>
            <Col >
                <SectionItem
                url='./works/composer'
                image={imageComposer}
                name='Composer'
                />
            </Col>
            <Col>
                <SectionItem 
                url='./works/pianist'
                image={imagePianist}
                name='Pianist'
                />
            </Col>
            <Col>
                <SectionItem 
                url='./works/teacher'
                image={imageTeacher}
                name='Teacher'
                />
            </Col>
        </Row> 
            <hr/>
        <Row className='col-xs-12 col-md-8'>

            <Col>
            <h4 className='home-h4'> Engage </h4>
                <SectionItem 
                url='./engage'
                image={imageEngage}
                name='Engage'
                />
            </Col>
        
            <Col>
            <h4 className='home-h4'> Contact </h4>
                <SectionItem 
                url='./contact'
                image={imageContact}
                name='Contact'
                />
            </Col>
        </Row>
            <hr/>

            </Container>

       </>
    )
}

export default Home;