const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000; // Use the specified port or default to 5000

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express.js!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
