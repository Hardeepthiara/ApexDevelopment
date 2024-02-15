// App.js
import React from 'react';
import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";
import Form from './Form';
import ContactForm from './ContactForm';

const App = () => {
   return (
      <div className="App">
          <Router>
         <div>
         <Routes>
          <Route path="/register" element={<Form />} />
         
          <Route path="/contact-us" element={<ContactForm />} />

        </Routes>
         </div> 
       </Router>   
      </div>
   );
};

export default App;
