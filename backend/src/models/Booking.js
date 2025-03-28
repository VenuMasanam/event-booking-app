const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  numberOfTickets: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', BookingSchema);