const express = require('express');
const { getEmail, postEmail } = require('../controller/emailControler');

const emailRoute = express.Router();

emailRoute.get('/email', getEmail);

emailRoute.post('/email', postEmail);

module.exports = emailRoute;
