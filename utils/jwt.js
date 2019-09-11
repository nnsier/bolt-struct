const jwt = require('jsonwebtoken');

const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

module.exports = {
  sign: payload => jwt.sign(payload, privateKey, { expiresIn: '12h' }),
  verify: (token) => {
    try {
      return jwt.verify(token, publicKey);
    } catch (err) {
      return false;
    }
  },
};
