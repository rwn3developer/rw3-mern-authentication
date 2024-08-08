const UserModel = require("../models/UserModel");

const cloudinary = require("../config/cloudinaryConfig");

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

module.exports = {
  register,
};
