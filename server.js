// server.js
require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const connectDB = require('./src/config/db');

const contactsRouter = require('./src/routes/contacts.routes');
const projectsRouter = require('./src/routes/projects.routes');
const servicesRouter = require('./src/routes/services.routes');
const usersRouter = require('./src/routes/users.routes');

const app = express();

// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

// Mount routes
app.use('/api/contacts', contactsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res, next) => next(createError(404, `Not Found: ${req.originalUrl}`)));

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

// Start server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});
