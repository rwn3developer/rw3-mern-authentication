const UserModel = require("../models/UserModel");

const cloudinary = require("../config/cloudinaryConfig");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user || user.password != password) {
      return res.status(404).send({
        success: false,
        message: "Email and password not valid",
      });
    }
    const token = await jwt.sign({ payload: user }, "rw3", {
      expiresIn: 1000 * 60 * 60 * 24,
    });

    return res.status(404).send({
      success: true,
      message: "Token is here",
      token,
    });
  } catch (err) {
    console.log(err);
  }
};

const register = async (req, res) => {
  try {
    const { name, email, password, city, phone } = req.body;

    let imageUrl = await cloudinary.uploader.upload(req.file.path);

    let user = await UserModel.create({
      name: name,
      email: email,
      password: password,
      city: city,
      phone: phone,
      image: imageUrl.secure_url,
      public_id: imageUrl.public_id,
    });
    return res.status(200).send({
      success: true,
      message: "User successfully register",
      user,
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

const alluser = async (req, res) => {
  try {
    let users = await UserModel.find({});
    return res.send(users);
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  register,
  login,
  alluser,
};
