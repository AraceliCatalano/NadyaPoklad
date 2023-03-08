import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {TheArtist , Works,Engage, UpcomingEvents, Contact, NotFound, Home } from '../pages'


// Imports for Login with Firebase
import { UserAuthContextProvider } from '../context/UserAuthContext';
import LoginAdmin from '../pages/LoginAdmin';
import ForgotPassword from '../pages/ForgotPassword'
import { DashboardAdmin } from '../components/dashboard/pagesAdmin/DashboardAdmin';


function Generic() {
  return (

   <>  
    <UserAuthContextProvider>
      <Routes>
            <Route path="/" element={<Home />} />    
            <Route exact path="/theartist" element={<TheArtist />} /> 
            <Route exact path="/works/*" element={<Works />} /> 
            <Route exact path="/upcoming_events" element={<UpcomingEvents />} />    
            <Route exact path="/engage" element={<Engage />} />    
            <Route exact path="/contact" element={<Contact />} />       
            <Route exact path="/login_admin" element={<LoginAdmin />} />
            <Route exact path="/dashboard/*" element={<DashboardAdmin/>}/>
            <Route exact path="/resetPassword" element={<ForgotPassword />} />  


            <Route path="/upcoming_events/:id" element={<UpcomingEvents />} />    
            <Route path="*" element={<NotFound />} /> 
            
           
      </Routes>        
    </UserAuthContextProvider>

   </>   
  );
}

export default Generic;