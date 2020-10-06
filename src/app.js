const express = require('express');

// App
const app = express();

// Load routes
const route = require('./routes/router.js');
app.use('/', route);


module.exports = app;