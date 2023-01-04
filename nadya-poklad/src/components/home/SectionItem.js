import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../styles/App.css'

export default function SectionItem(props) {
  return (
   
   <div className="section">

        <div className="box">
          <Image src={props.image} alt={props.image} className="box-picture" />
        </div>

        <Link as="button"  className=" title-section-bg link " position-absolute bottom-2 start-0  >
          <a href={props.url} className="link link-header">  {props.name}  </a>
        </Link>
      

    </div>
  )
}
