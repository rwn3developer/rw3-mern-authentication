const express = require("express");

const routes = express.Router();

const AuthController = require("../controllers/AuthController");

const multer = require("multer");

const st = multer.diskStorage({});

const fileUpload = multer({ storage: st }).single("image");

const verifyToken = require("../middleware/verifyToken");

routes.post("/login", AuthController.login);

routes.post("/register", fileUpload, AuthController.register);

routes.get("/alluser", verifyToken, AuthController.alluser);

module.exports = routes;
