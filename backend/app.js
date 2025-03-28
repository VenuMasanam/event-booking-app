const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const eventRoutes = require('./src/routes/eventRoutes'); // Updated path
const bookingRoutes = require('./src/routes/bookingRoutes'); // Updated path
const authRoutes = require('./src/routes/authRoutes'); // Updated path

app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Event Booking API');
});

module.exports = app;