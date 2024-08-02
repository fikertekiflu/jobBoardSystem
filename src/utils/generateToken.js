const jwt = require('jsonwebtoken');
require("dotenv").config()
const token_key = "fiekr";
const generateToken = (id) => {
  return jwt.sign({ id }, token_key, { expiresIn: '1h' });
};
module.exports = generateToken