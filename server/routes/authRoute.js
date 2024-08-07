const express = require('express');

const route = express.Router();

const AuthController = require('../controllers/AuthController')

const multer = require('multer');

const st = multer.diskStorage({});

const fileUpload = multer({storage:st}).single('image')

console.log("register ");


route.post('/register',fileUpload,AuthController.register);

module.exports = route;