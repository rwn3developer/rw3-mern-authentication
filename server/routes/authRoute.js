const express = require('express');

const route = express.Router();

const AuthController = require('../controllers/AuthController')

console.log("auth routing is running");


module.exports = route;