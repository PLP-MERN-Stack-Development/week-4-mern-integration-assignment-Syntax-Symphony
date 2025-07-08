const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
// ...setup express, middleware...
connectDB();

// Import routes
const postRoutes = require('./routes/posts');
// You can add authRoutes, categoryRoutes later similarly

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads (for images later)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Log HTTP requests when in development mode
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// Use the post routes at /api/posts
app.use('/api/posts', postRoutes);

// Root route (just a test route)
app.get('/', (req, res) => {
  res.send('MERN Blog API is running');
});

// Error handling middleware (catches errors and sends JSON response)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || 'Server Error',
  });
});

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

// Handle unhandled promise rejections gracefully
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

module.exports = app;
