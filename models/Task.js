const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'title is required',
  },
  length: {
    type: Number,
    required: true,
  },
  pace: {
    type: String,
    required: true,
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
},
{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Task = mongoose.model('Task', TaskSchema);

module.exports = { TaskSchema, Task };
