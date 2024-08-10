const express = require('express');
const openaiRoutes = require('./routes/openai.js');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const PORT = 3001;

const app = require("./app");

app.listen(PORT, () => {
  console.log(`server has started on http://localhost:${PORT}`);
});


// Middleware
// app.use(cors());
// app.use(express.json()); // Parse JSON bodies

// Register routes
// // app.use('/api/openai', openaiRoutes);

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
