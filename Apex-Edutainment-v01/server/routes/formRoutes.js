// routes/formRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to handle form submission
router.post('/', async (req, res) => {
   try {
      const { name, email } = req.body;
      // Create a new user instance
      const newUser = new User({ name, email });
      // Save the user to the database
      await newUser.save();
      res.send('Form submitted successfully!');
   } catch (error) {
      console.error('Error submitting form:', error);
      res.status(500).send('Server error');
   }
});

module.exports = router;
