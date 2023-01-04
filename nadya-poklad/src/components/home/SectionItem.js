import React from 'react'
import { Container, Image, Card} from 'react-bootstrap'

export default function SectionItem(props) {
  return (
    <div className="section">

    <Card  className="box">
        <Image src={props.image} alt={props.image} className="box-picture"  />
    </Card>
          
          <div className=" title-section-bg"  position-absolute bottom-2 start-0 > 
          <p className=" title-section">
            {props.name}
            </p>
            </div>
    </div>
  )
}
