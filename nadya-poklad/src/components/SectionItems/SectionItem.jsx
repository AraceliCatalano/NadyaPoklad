import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/App.css'

const SectionItem= (props) => {
  return (
   
   < >

        <div className="section">
          <Image src={props.image} alt={props.image} className="box-picture" />

        <div as="button"  className=" title-section-bg  " position-absolute="true" href={props.url}>
          <Link to={props.url} as="link" className="link-header">  {props.name}  </Link>
        </div>
      
        </div>

    </>
  )
}
export default SectionItem;