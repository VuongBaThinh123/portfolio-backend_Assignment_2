// src/controllers/services.controller.js
const Service = require('../models/service.model');
module.exports = require('./_crud')(Service);
