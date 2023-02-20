import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/App.css'

const SectionItem= (props) => {
  return (
   
   <div className="section">

        <div className="">
          <Image src={props.image} alt={props.image} className="box-picture" />
        </div>

        <div as="button"  className=" title-section-bg link " position-absolute="true" href={props.url}>
          <Link to={props.url} as="link" className="link link-header">  {props.name}  </Link>
        </div>
      

    </div>
  )
}
export default SectionItem;