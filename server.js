// server.js
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

const connectDB = require('./src/config/db');

const contactsRouter = require('./src/routes/contacts.routes');
const projectsRouter = require('./src/routes/projects.routes');
const servicesRouter = require('./src/routes/services.routes');
const usersRouter    = require('./src/routes/users.routes');

// 1) CREATE APP FIRST
const app = express();

// 2) MIDDLEWARE
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// 3) ROOT ROUTE
app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API is running' });
});

// 4) MOUNT ROUTERS
app.use('/api/contacts', contactsRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/users', usersRouter);

// 5) 404 + ERROR HANDLER
app.use((req, _res, next) => next(createError(404, `Not Found: ${req.originalUrl}`)));
app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({ status: err.status || 500, message: err.message || 'Internal Server Error' });
});

// 6) START
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
});


app.use('/api/services', require('./src/routes/services.routes'));
app.use('/api/users',    require('./src/routes/users.routes'));
