const mongoose = require('mongoose');
const { PositionSchema } = require('./Position');

const { Schema } = mongoose;


const TaskSchema = new Schema({
  title: {
    type: String,
    trim: true,
  },
  length: {
    type: Number,
  },
  pace: {
    type: String,
    trim: true,
  },
  hilly: {
    type: Boolean,
  },
  temp: {
    type: Number,
  },
  weather: {
    type: String,
  },
  positions: [PositionSchema],
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Task = mongoose.model('Task', TaskSchema);

module.exports = { TaskSchema, Task };
