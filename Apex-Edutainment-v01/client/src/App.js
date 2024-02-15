
import React from 'react';
import {
   BrowserRouter as Router,
   Routes,
   Route
 } from "react-router-dom";
import Register from './Screens/Register';
import Login from './Screens/Login';
import Form from './Form';
import ContactForm from './ContactForm';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
   return (
      <div className="App">
          <Router>
            <div>
               <Routes>
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/form" element={<Form />} /> 
                  <Route path="/contact-us" element={<ContactForm />} />
               </Routes>
            </div> 
       </Router>   
      </div>
   );
};

export default App;
