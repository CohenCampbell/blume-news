const jwt = require("jsonwebtoken");
require("dotenv").config();

function createToken(user) {
  return jwt.sign(user, process.env.SECRET_KEY);
}

module.exports = { createToken };
