const mongoose = require('mongoose');
const TaskSchema = require('./Task');


const { Schema } = mongoose;


const RegimenSchema = new Schema({
  user: {
    type: String,
    required: 'User is required',
    trim: true,
  },
  intensity: {
    type: String,
    required: 'intensity is required',
    trim: true,
  },
  plan: {
    type: String,
    required: 'plan is required',
    trim: true,
  },
  length: {
    type: Number,
    trim: true,
  },
  tasks: [TaskSchema],
});

const Regimen = mongoose.model('Regimen', RegimenSchema);

Regimen.prototype.generateTasks = function () {
  console.log('sup.');
};

module.exports = {
  Regimen,
  RegimenSchema,
};
