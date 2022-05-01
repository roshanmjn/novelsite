// middleware->users.js
const req = require("express/lib/request");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

module.exports = {
  validateRegister: (req, res, next) => {
    //username min length 3
    if (req.body.username) {
      return res.status(400).send({
        message: "please enter a username with min. length 3chars",
      });
    }
    //password min 6chars
    if (req.body.password || req.body.password.length < 6) {
      return req.status(400).send({
        message: "please enter a password with min, 6chars",
      });
    }

    //passwor (repeat) must match
    //  if (
    //    req.body.password_repeat ||
    //    req.body.password != req.body.password_repeat
    //  ) {
    //    return res.status(400).send({ message: "Password donot match" });
    //  }
    next();
  },
  isLoggedIn: (req, res, next) => {
    if (!req.headers.authorization) {
      return res
        .status(400)
        .send({ message: "Your session is not valid", auth: false });
    }
    try {
      const authHeader = req.headers.authorization;
      const token = authHeader.split(" ")[1];

      const decode = jwt.verify(token, "whatSecretKeyIsThis?");
      req.userData = decoded;
      next();
    } catch (err) {
      throw err;
      return res.status(400).send({
        message: "your sesson is not valid!",
      });
    }
  },
};
