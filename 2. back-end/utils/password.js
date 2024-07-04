const jwt = require('jsonwebtoken');

const expiresIn = '90d';

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET_TOKEN, { expiresIn });
  return token;
};

module.exports = { createToken };
