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
    default: 3,
  },
  regimenForTask: [{ type: Schema.Types.ObjectId, ref: 'Regimen' }],
});

// const Task = mongoose.model('Task', TaskSchema);

module.exports = TaskSchema;
