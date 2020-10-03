const express = require('express');

// App
const app = express();

// Load routes

const index = require('./routes/index.js');
app.use('/', index);

const myProfile = require('./routes/myProfile.js');
app.use('/', myProfile);

const friendProfile = require('./routes/friendProfile');
app.use('/', friendProfile);

module.exports = app;