// src/config/db.js
const mongoose = require('mongoose');

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI is missing in .env');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(uri, {});
    console.log(`✅ MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (err) {
    console.error('❌ Mongo connection error:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;
