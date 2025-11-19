// server.js
require('dotenv').config();
const express = require('express');
<<<<<<< HEAD
const createError = require('http-errors');
<<<<<<< HEAD
const cors = require('cors');
const morgan = require('morgan');
=======
>>>>>>> 0a2476d5fd4e7575600263334c58c610941c5637
=======
const morgan = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

>>>>>>> parent of cc86a8a (Portfolio_Backend)
const connectDB = require('./src/config/db');

const contactsRouter = require('./src/routes/contacts.routes');
const projectsRouter = require('./src/routes/projects.routes');
const servicesRouter = require('./src/routes/services.routes');
const usersRouter    = require('./src/routes/users.routes');

// 1) CREATE APP FIRST
const app = express();

<<<<<<< HEAD
<<<<<<< HEAD
// ---------- Middleware ----------
=======
// 2) MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
>>>>>>> parent of cc86a8a (Portfolio_Backend)
app.use(express.json());

// 3) ROOT ROUTE
app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

<<<<<<< HEAD
// ---------- Routes ----------
=======
// Middleware
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

// Mount routes
>>>>>>> 0a2476d5fd4e7575600263334c58c610941c5637
=======
// 4) MOUNT ROUTERS
>>>>>>> parent of cc86a8a (Portfolio_Backend)
app.use('/api/contacts', contactsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

<<<<<<< HEAD
<<<<<<< HEAD
// ---------- 404 ----------
app.use((req, _res, next) => {
  next(createError(404, `Not Found: ${req.originalUrl}`));
});

// ---------- Error handler ----------
app.use((err, _req, res, _next) => {
=======
// 404 handler
app.use((req, res, next) => next(createError(404, `Not Found: ${req.originalUrl}`)));

// Error handler
app.use((err, req, res, next) => {
>>>>>>> 0a2476d5fd4e7575600263334c58c610941c5637
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

<<<<<<< HEAD
// ---------- Start server ----------
=======
// 5) 404 + ERROR HANDLER
app.use((req, _res, next) => next(createError(404, `Not Found: ${req.originalUrl}`)));
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({ status: err.status || 500, message: err.message || 'Internal Server Error' });
});

// 6) START
>>>>>>> parent of cc86a8a (Portfolio_Backend)
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
<<<<<<< HEAD
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
=======
// Start server
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
>>>>>>> 0a2476d5fd4e7575600263334c58c610941c5637
=======
  app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
>>>>>>> parent of cc86a8a (Portfolio_Backend)
});


app.use('/api/services', require('./src/routes/services.routes'));
app.use('/api/users',    require('./src/routes/users.routes'));
