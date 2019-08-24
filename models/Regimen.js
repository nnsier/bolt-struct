const mongoose = require('mongoose');

const { Schema } = mongoose;

const RegimenSchema = new Schema({
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
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
});

const Regimen = mongoose.model('Regimen', RegimenSchema);

module.exports = Regimen;
