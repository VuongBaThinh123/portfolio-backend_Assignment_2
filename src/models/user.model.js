const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname:  { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true, unique: true },
  password:  { type: String, required: true },
  created:   { type: Date, default: Date.now },
  updated:   { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);
