const express = require('express');

const routes = express.Router();


routes.use('/auth',require('./authRoute')); 


module.exports = routes;