/* eslint-disable object-shorthand */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { TaskSchema } = require('./Task');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    trim: true,
    unique: true,
    required: 'username is required',
  },
  password: {
    type: String,
    trim: false,
    required: 'password is required',
  },
  email: {
    type: String,
    trim: true,
  },
  tasks: [TaskSchema],
});
const User = mongoose.model('User', UserSchema);

// User.associate = function ({ AuthToken }) {
//   User.hasMany(AuthToken);
// };

User.prototype.logout = async function (token) {
  mongoose.models.AuthToken.destroy({ where: { token } });
};

User.prototype.authorize = async function () {
  const user = this;
  // this is where I'll have to make the jwt
  return user.username;
};

User.authenticate = async function (username, password) {
  const user = await User.findOne({ username });

  if (bcrypt.compareSync(password, user.password)) {
    return user.authorize();
  }
  throw new Error('invalid password');
};


// should I make a method here? An insert task function?

module.exports = User;
