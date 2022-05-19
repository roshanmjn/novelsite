const router = require("express").Router();
const userMiddleware = require("../middleware/authMiddleware");
const {
  userLoginController,
  userLogoutController,
} = require("../controllers/userController");

//route= /login
router.use("/login", (req, res, next) => {
  console.log("REQ made to /userLogin route");
  // console.log({ path: __dirname });
  next();
});
router.use("/logout", (req, res, next) => {
  console.log("REQ made to /userLogout route");
  next();
});

router.post("/login", userMiddleware.validateLogin, userLoginController);
router.get("/logout", userLogoutController);
module.exports = router;
