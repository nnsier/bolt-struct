const mongoose = require('mongoose');
const { TaskSchema } = require('./Task');

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
  tasks: [TaskSchema],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
