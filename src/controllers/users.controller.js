// src/controllers/users.controller.js
const User = require('../models/user.model');
module.exports = require('./_crud')(User);
