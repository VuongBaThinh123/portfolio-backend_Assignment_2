// server.js
require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./src/config/db');
const authRouter = require('./src/routes/auth.routes');


const contactsRouter = require('./src/routes/contacts.routes');
const projectsRouter = require('./src/routes/projects.routes');
const servicesRouter = require('./src/routes/services.routes');
const usersRouter = require('./src/routes/users.routes');

const app = express();

// ---------- Middleware ----------
app.use(express.json());

// Allow the React app (Vite default) to talk to this backend
const allowedOrigins = [
  'http://localhost:5173',          // local Vite
  process.env.FRONTEND_ORIGIN || '' // optional deployed frontend
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(morgan('dev'));

// Simple health check
app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API is running ✅' });
});

// ---------- Routes ----------
app.use('/api/contacts', contactsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);


// ---------- 404 ----------
app.use((req, _res, next) => {
  next(createError(404, `Not Found: ${req.originalUrl}`));
});

// ---------- Error handler ----------
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

// ---------- Start server ----------
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
});
