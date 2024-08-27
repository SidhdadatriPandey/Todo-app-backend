// Import the Express module
const express = require('express');

// Create an Express application instance
const app = express();

// Load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request body
app.use(express.json());

// Import routes for TODO
const todoRoutes = require('./routes/todos'); // Ensure 'todoRoutes' matches in both places

// Mount the TODO API routes
app.use("/api/v1", todoRoutes);

// Default route
app.get('/', (req, res) => {
    res.send(`<h2>This is home page baby</h2>`);
});

// Connect to the database
const dbConnect = require('./config/database');
dbConnect();

// Start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
