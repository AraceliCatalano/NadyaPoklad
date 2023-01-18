import React, { useState, useRef } from 'react';
import '../../styles/App.css'
import { Accordion, Image } from 'react-bootstrap';



export default function UpcomingEventsItem(props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };


  return (
 <>
 <div ref={ref} >
    <div  position-relative="true" className="section" >
        <Image src={props.image} alt={props.image} className="box-picture event-Item" />
        
      

        <Accordion defaultActiveKey="0" position-absolute="true" className=" accordion-title-bg"   >
          <Accordion.Item eventKey="1" >
            <Accordion.Header > {props.date} - {props.event} 
            
            </Accordion.Header>

            <Accordion.Body >
              {props.description}
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* <Button onMouseEnter={handleClick} onMouseLeave={handleClick} position-absolute="true" className=" accordion-title-bg"> {props.date} - {props.event}</Button>
        <Overlay
          show={show}
          target={target}
          placement="top"
          container={ref}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            <Popover.Header >{props.event}</Popover.Header>
              <Popover.Body>
                <strong>{props.description}</strong> 
              </Popover.Body>

          </Popover>

        </Overlay> */}
        </div>
     </div>


 </>
  )
}
