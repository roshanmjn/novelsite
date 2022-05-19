const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { userLogoutController } = require("../controllers/userController");

router.use("/logout", (req, res, next) => {
  console.log("REQ made to /userLogout route");
  next();
});

router.get("/logout", userLogoutController);

module.exports = router;
