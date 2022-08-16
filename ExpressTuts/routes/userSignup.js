const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conn = require("../database");
const userMiddleware = require("../middleware/authMiddleware.js");
const { userSignupController } = require("../controllers/userController");

router.use("/check", (req, res, next) => {
  console.log("REQ made to /check UserCheck route");
  next();
});
router.use("/signup", (req, res, next) => {
  console.log("REQ made to /userSignup route");
  next();
});

router.get("/check/:username/username", (req, res) => {
  const username = req.params.username;
  const query = "SELECT username FROM tbl_users WHERE username = ?";
  conn.query(query, username, (err, row) => {
    if (row.length > 0) {
      // res.send({ usernameAvailable: false });
      res.send(false);
    } else {
      // res.send({ usernameAvailable: true });
      res.send(true);
    }
  });
});

router.get("/check/:email/email", (req, res) => {
  const email = req.params.email;
  const query = "SELECT email FROM tbl_users WHERE email = ?";
  conn.query(query, email, (err, row) => {
    if (row.length > 0) {
      res.send(false);
    } else {
      res.send(true);
    }
  });
});
// router.post("/signup", userMiddleware.validateRegister, (req, res) => {
//   console.log(req.body);
// });
//localhost:5000/signup
router.post("/signup", userMiddleware.validateRegister, userSignupController);

module.exports = router;
