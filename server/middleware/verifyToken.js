const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(403).send({
        success: false,
        message: "Token is blank",
      });
    }
    var doneToken = token.split(" ")[1];
    jwt.verify(doneToken, "rw3", (err, decoded) => {
      if (err) {
        return res.status(403).send({
          success: false,
          message: "Token is not valid",
        });
      }
      req.user = decoded.payload;
      return next();
    });
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = verifyToken;
