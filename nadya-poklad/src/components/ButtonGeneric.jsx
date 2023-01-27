import React from 'react'
import '../styles/ButtonGeneric.css'
import {Button} from 'react-bootstrap'


export const ButtonGeneric = ({text}) => {

    
  return (
    <Button variant='btn-outlined-info btn-generic'>{text}</Button>

  
   )
}