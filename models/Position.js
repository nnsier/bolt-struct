const mongoose = require('mongoose');

const { Schema } = mongoose;

const PositionSchema = new Schema({
  latitude: {
    type: Number,
    trim: true,
    required: 'latitude is required',
  },
  longitude: {
    type: Number,
    trim: true,
    required: 'longitude is required',
  },
  timestamp: {
    type: Number,
    trim: true,
  },
});

const Position = mongoose.model('Position', PositionSchema);

module.exports = { PositionSchema, Position };
