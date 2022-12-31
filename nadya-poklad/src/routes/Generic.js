import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home'
import TheArtist from '../components/theArtist/TheArtist';
import NotFound from '../components/NotFound';




function Generic() {
  return (

   <>  
   
      <Routes>
            <Route path="/" element={<Home />} />    
            <Route exact path="/theartist" element={<TheArtist />} /> 
            <Route path="*" element={<NotFound />} />  
      </Routes>        
    

   </>   
  );
}

export default Generic;