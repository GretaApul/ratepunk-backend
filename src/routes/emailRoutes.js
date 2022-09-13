const express = require('express');
const { postEmail } = require('../controller/emailControler');

const emailRoute = express.Router();

emailRoute.post('/email', postEmail);

module.exports = emailRoute;
