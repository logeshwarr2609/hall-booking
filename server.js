require('dotenv').config(); // Load environment variables

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: "false" }));

// Serve static files from the React frontend app
app.use(express.static(path.resolve(__dirname, "frontend/build")));

// Routes
module.exports = function (collection) {
  app.get("/getData", (req, res) => {
    require("./getData")(req, res, collection);
  });

  app.post("/postData", async (req, res) => {
    await collection.insertOne(req.body);
    res.status(200).send("Real data inserted");
  });

  app.get("/getHistory", (req, res) => {
    require("./getHistory")(req, res, collection);
  });

  // For production, serve the React app
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build/"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("RIT Hall Booking Server running");
    });
  }

  // Start the server
  app.listen(PORT, () => {
    console.log("Server is listening to port " + PORT);
  });
};
