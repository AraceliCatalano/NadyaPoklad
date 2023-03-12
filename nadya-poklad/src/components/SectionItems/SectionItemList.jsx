import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

import { Row, Col } from 'react-bootstrap'
import SectionItem from '../SectionItems/SectionItem'
import '../../styles/App.css'

const SectionItemList = () => {

    const [itemHome, setItemHome] = useState([]);
    const [otherItem, setOtherItem] = useState([])

    useEffect(() => {
        const homeSectionItem = collection(db, "SectionItems");
        const queryHomeSectionItem = query(homeSectionItem, orderBy('name', 'desc'));
        getDocs(queryHomeSectionItem)
            .then(res => setItemHome(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
        // console.log(itemHome)
    }, []);

    useEffect(() => {
        const homeOtherSectionItem = collection(db, "SectionItems-Others");
        const queryHomeOtherSectionItem = query(homeOtherSectionItem, orderBy('name', 'desc'));
        getDocs(queryHomeOtherSectionItem)
            .then(res => setOtherItem(res.docs.map(doc => ({ id: doc.id, ...doc.data() }))));
        
    }, []);


    return (
        <>

            {
                itemHome.map((item) => (

                    <Col key={item.id}>
                        <Row className='mt-3 mb-3 ' >
                            <SectionItem
                                name={item.name}
                                url={item.url}
                                image={item.image} />
                        </Row>
                    </Col>

                ))
            }


            {
                otherItem.map((item, id) => (

                    <Col key={item.id} >
                       
                            <Row className='mt-3 mb-3' >
                                <SectionItem 
                                    name={item.name}
                                    url={item.url}
                                    image={item.image} />
                            </Row>
                       
                    </Col>

                ))
            }


        </>

    )
}

export default SectionItemList