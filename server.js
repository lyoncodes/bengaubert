'use strict'
// dependencies
const express = require('express');
const superagent = require('superagent');

// modules
const routes = require('./public/js/routes.js');

// envi. variables
require('dotenv').config();

// HTTP Server
const app = express();

//PORT
const PORT = process.env.PORT || 3000;

// Middleware and View Engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// Routes
app.use('/', routes);

// App Listen
app.listen(PORT, () => console.log(`we here for you on port ${PORT}`));

module.exports = app;