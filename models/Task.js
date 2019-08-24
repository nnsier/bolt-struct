const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'title is required',
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  length: {
    type: Number,
    required: true,
  },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
