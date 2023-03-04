import React from 'react';
import { Tabs} from 'react-bootstrap';
//import { Pianist, MusicalEventOrganizer, Teacher, Composer } from '../works';
import TabButton from './TabButton';


const Works = ( {tabs}) => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="works"
      className="mb-3"
      fill
    >
    {
      tabs.map((tab, index) => (
          <TabButton 
            key={index}
            name={tab.name}
            url={tab.url}
            component={tab.component}
            />
            ))       
            
          }
          {console.log(tabs)}
    

    </Tabs>
  )
}

export default Works
