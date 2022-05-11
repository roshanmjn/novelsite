const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = express.Router();
const conn = require("../database");

const userMiddleware = require("../middleware/authMiddleware");

router.use("/bookmarks", (req, res, next) => {
  console.log("REQ made to /userBookmarks route");
  next();
});
// userMiddleware.requireAuth,

router.get("/bookmarks", (req, res) => {
  // console.log(req.cookies);
  // console.log(req.cookies);
});

module.exports = router;
