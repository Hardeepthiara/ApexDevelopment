// Form.js
import React, { useState } from 'react';

const Form = () => {
   const [formData, setFormData] = useState({});

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await fetch('http://localhost:4000/api/form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
         });
         if (response.ok) {
            console.log('Form submitted successfully!');
         }
      } catch (error) {
         console.error('Error submitting form:', error);
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input type="text" name="name" placeholder="Name" onChange={handleChange} />
         <input type="email" name="email" placeholder="Email" onChange={handleChange} />
         <button type="submit">Submit</button>
      </form>
   );
};

export default Form;
