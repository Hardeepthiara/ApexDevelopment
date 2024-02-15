// index.js
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

const formRoutes = require('./routes/formRoutes');
const contactRoute = require('./routes/contact');
const port = process.env.PORT || 4000;
app.use(cors());

app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/apex_hardeep';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Middleware to parse JSON request bodies

// Use form routes
app.use('/api/form', formRoutes);
app.use('/api/contact', contactRoute);

// Start server

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});