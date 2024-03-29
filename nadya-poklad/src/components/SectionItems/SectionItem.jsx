import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/App.css'

const SectionItem= (props) => {
  return (
   
   < >

        <div className="section ">

        <Link to={props.url}as="button"  href={props.url} >
          <Image src={props.image} alt={props.image} className="box-picture" />
        </Link>

        <a href={props.url} as="link" className=" title-section-bg sectionItem-link" position-absolute="true" >
           {props.name} 
        </a>
      
        </div>

    </>
  )
}
export default SectionItem;