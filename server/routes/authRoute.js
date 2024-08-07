const express = require('express');

const routes = express.Router();

const AuthController = require('../controllers/AuthController');

const multer = require('multer');

const st = multer.diskStorage({});

const fileUpload = multer({storage:st}).single('image')


routes.post('/register',fileUpload,AuthController.register);

module.exports = routes