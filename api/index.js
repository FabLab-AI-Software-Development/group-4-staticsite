const express = require('express');
const openaiRoutes = require('./routes/openai.js');
const cors = require('cors');
const dotenv = require('dotenv');
const app = require("./app");

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Register routes
app.use('/api/openai', openaiRoutes);   

const PORT = 5001;
// Start the server
app.listen(PORT, () => {
  console.log(`server has started on http://localhost:${PORT}`);
});
