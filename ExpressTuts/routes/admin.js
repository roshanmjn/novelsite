const express = require("express");
const { Router } = require("express");
const req = require("express/lib/request");
const {
  adminLoginController,
  adminLogoutController,
  displayUserController,
  displaySelectedUserController,
  insertUserController,
  deleteUserController,
  updateUserController,
} = require("../controllers/adminController");
// const conn = require("../database");
const router = Router();
const { adminLogin, adminLoggedIn } = require("../middleware/authAdmin");
// router.use("/admin", (req, res, next) => {
//   console.log("REQ made to /admin route");
//   next();
// });

//ADMIN LOGIN
router.post("/admin/login", adminLogin, adminLoginController);
//ADMIN LOGOUT
router.get("/admin/logout", adminLoggedIn, adminLogoutController);

//TO SELECT ALL USERS, MAIN ADMIN AUTHENTICATION CHECK HERE
router.get("/admin/users", adminLoggedIn, displayUserController);

//  TO SELECT SPECIFIC USER
router.get("/admin/users/:id", displaySelectedUserController);

//TO INSERT DATA INTO USER TABLE
router.post("/admin/users/create", insertUserController);

//TO  DELETE DATA FROM USER TABLE
router.delete("/admin/users/:id", deleteUserController);

//TO UPDATE DATA OF CERTAIN USER
router.put("/admin/users/edit/:id", updateUserController);

module.exports = router;
