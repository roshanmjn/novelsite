const express = require("express");
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
router.post("/bookmarks", (req, res) => {
  res.send(req.body);
  const { novel_id, user_id } = req.body;
  const query = "";
  try {
    conn.query;
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
