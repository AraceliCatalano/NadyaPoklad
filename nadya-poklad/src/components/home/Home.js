import SectionItem from './SectionItem'
import imageComposer from '../../Assests/images/Composer.jpg'
import imagePianist from '../../Assests/images/Pianist.jpg'
import imageTeacher from '../../Assests/images/Teacher.jpg'
import imageEngage from '../../Assests/images/Engage.jpg'
import imageContact from '../../Assests/images/PianoContact.jpg'

function Home () {

    return (
       <> 
        <SectionItem
        image={imageComposer}
        name='Composer'
        />
        <hr/>

        <SectionItem 
        image={imagePianist}
        name='Pianist'
        />
            <hr/>
        <SectionItem 
        image={imageTeacher}
        name='Teacher'
        />
            <hr/>
         <SectionItem 
        image={imageEngage}
        name='Engage'
        />
            <hr/>
         <SectionItem 
        image={imageContact}
        name='Contact'
        />
            <hr/>



       </>
    )
}

export default Home;