import React from 'react'
import { Tab} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const TabButton = ({ name, url, component }) => {
    return (
        <>
                <Tab eventKey={name} title={name}  >
                <NavLink to={url}> 
                    {component}
                </NavLink>
                </Tab>
        </>
    )
}

export default TabButton
