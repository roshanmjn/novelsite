const jwt = require("jsonwebtoken");
const conn = require("../database");
require("dotenv").config();

module.exports = {
  validateRegister: (req, res, next) => {
    //username min length 3
    if (!req.body.username || req.body.username.length < 4) {
      return res.status(400).send({
        message: "please enter a username with min. length 4chars",
        // message: `${req.body.username}`,
      });
    }
    //password min 6chars
    if (!req.body.password || req.body.password.length < 6) {
      return res.status(400).send({
        message: "please enter a password with min, 6chars",
      });
    }

    //password (repeat) must match
    //  if (
    //    req.body.password_repeat ||
    //    req.body.password != req.body.password_repeat
    //  ) {
    //    return res.status(400).send({ message: "Password donot match" });
    //  }
    next();
  },
  validateLogin: (req, res, next) => {
    //username isEmpty check
    if (!req.body.username) {
      return res.status(400).send({
        message: "please enter a username to login",
      });
    }
    //password field isEmpty check
    if (!req.body.password) {
      return res.status(400).send({
        message: "please enter password to login !",
      });
    }
    next();
  },

  requireAuth: (req, res, next) => {
    const token = req.cookies.jwt;

    //CHECK JSON WEB TOKEN EXISTS & IS VERIFIED
    if (token) {
      jwt.verify(
        token,
        process.env.USER_ACCESS_TOKEN_SECRET,
        (err, decodedToken) => {
          if (err) {
            // throw err;
            console.log(err.message);
            res.status(400).send({
              message: "your token is not valid: err token",
              isLoggedIn: false,
            });
          } else {
            // console.log(decodedToken);
            // res.status(200).send({
            //   message: "Session valid",
            //   isLoggedIn: true,
            // });
            next();
          }
        }
      );

      // next();
    } else {
      res
        .status(400)
        .send({ message: "Login to continue session", isLoggedIn: false });
    }
  },
};
