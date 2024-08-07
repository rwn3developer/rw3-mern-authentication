const express = require('express');

const route = express.Router();

route.use('/auth',require('./authRoute'));


module.exports = route;