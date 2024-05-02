// Import necessary modules
const express = require("express"); // Express.js for handling server logic
const app = express(); // Create an Express application instance
const cors = require("cors"); // Cors for enabling Cross-Origin Resource Sharing
const bodyParser = require("body-parser"); // Body parser for parsing incoming request bodies
const port = 5000; // Port number for the server to listen on

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded request bodies


// Start the server
app.listen(port, () => {
  console.log("Server is Running"); // Log message indicating server is running
});

// Example route for testing purposes
app.get("/Add", (req, res) => {
  res.send({
    message: "Hai", // Send a simple JSON response with a message
  });
});
