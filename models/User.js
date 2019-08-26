const mongoose = require('mongoose');
const { RegimenSchema } = require('./Regimen');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: 'name is required',
  },
  password: {
    type: String,
    trim: false,
    required: 'password is required',
  },
  email: {
    type: String,
    trim: true,
    required: 'email is required',
  },
  regimens: [RegimenSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
