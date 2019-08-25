const mongoose = require('mongoose');

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
    default: 10,
  },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

const Regimen = mongoose.model('Regimen', RegimenSchema);

module.exports = Regimen;
