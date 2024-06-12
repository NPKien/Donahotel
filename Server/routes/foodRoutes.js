// app.js
const express = require('express');
const app = express();
const foodRoutes = require('../controllers/foodController');

// Các middleware khác...

app.use('/', foodRoutes);

// Các route khác...

module.exports = app;