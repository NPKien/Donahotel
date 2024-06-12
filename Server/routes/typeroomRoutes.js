// app.js
const express = require('express');
const app = express();
const typeroomRoutes = require('../controllers/typeroomController');

// Các middleware khác...

app.use('/', typeroomRoutes);

// Các route khác...

module.exports = app;
