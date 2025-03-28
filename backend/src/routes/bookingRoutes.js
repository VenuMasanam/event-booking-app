const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create a booking
router.post('/', async (req, res) => {
  const { eventId, customerName, customerEmail, numberOfTickets } = req.body;
  try {
    const booking = new Booking({ eventId, customerName, customerEmail, numberOfTickets });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;