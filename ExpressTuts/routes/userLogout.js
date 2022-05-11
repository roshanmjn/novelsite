const router = require("express").Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/authMiddleware");

router.use("/logout", (req, res, next) => {
  console.log("REQ made to /userLogout route");
  next();
});

router.get("/logout", (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: false,
    secure: false,
    expires: new Date(Date.now() + 1000),
  });
  res.send("exp");
});

module.exports = router;
