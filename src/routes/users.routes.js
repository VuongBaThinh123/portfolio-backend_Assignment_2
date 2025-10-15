// src/routes/users.routes.js
const express = require('express');
const c = require('../controllers/users.controller');

const r = express.Router();

r.get('/', c.list);
r.get('/:id', c.get);
r.post('/', c.create);
r.put('/:id', c.update);
r.delete('/:id', c.remove);
r.delete('/', c.removeAll);

module.exports = r;
