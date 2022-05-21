const jwt = require("jsonwebtoken");
const conn = require("../database");

const adminLogin = (req, res, next) => {
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
  next();
};

//CHECK IF TOKEN ASSIGNED TO AS COOKIE OR NOT
const adminLoggedIn = (req, res, next) => {
  const token = req.cookies.jwtadmin;
  if (token) {
    jwt.verify(
      token,
      process.env.ADMIN_ACCESS_TOKEN_SECRET,
      (err, decodedToken) => {
        if (err) {
          //   throw err;
          console.log(err.message);
          res.status(400).send({
            message: "Your Token is not valid",
            isLoggedIn: false,
          });
        } else {
          next();
        }
      }
    );
  } else {
    res
      .status(400)
      .send({ message: "Login to continue session", isLoggedIn: false });
  }
};

module.exports = { adminLogin, adminLoggedIn };
