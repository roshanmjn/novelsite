const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conn = require("../database");
const userMiddleware = require("../middleware/authMiddleware.js");
const { userSignupController } = require("../controllers/userController");

router.use("/signup", (req, res, next) => {
  console.log("REQ made to /userSignup route");
  next();
});

//localhost:5000/signup
router.post("/signup", userMiddleware.validateRegister, userSignupController);

module.exports = router;
