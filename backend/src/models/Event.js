const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  facilities: [{ type: String }], // e.g., ["Food", "Decorations"]
  image: { type: String }, // URL to event image
});

module.exports = mongoose.model('Event', EventSchema);