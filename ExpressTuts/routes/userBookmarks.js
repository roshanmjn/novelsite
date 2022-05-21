const express = require("express");
const router = express.Router();
const conn = require("../database");
require("dotenv").config();
const userMiddleware = require("../middleware/authMiddleware");

router.use("/bookmarks", (req, res, next) => {
  console.log("REQ made to /userBookmarks route");
  next();
});
// userMiddleware.requireAuth,

//GET LOGGED IN USERS LOG
router.get("/bookmarks/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM tbl_user_log WHERE user_id = ? ";
  try {
    conn.query(query, [id], (err, rows) => {
      if (err) {
        throw err;
      }
      return res.status(200).send(rows);
    });
  } catch (err) {
    res.send(err);
  }
});

//GET LOGGED-IN USER'S NOVEL
router.post("/bookmarks/user", (req, res) => {
  // console.log(req.body);
  const { bookmarked_novels_id } = req.body;
  const query = `SELECT * FROM tbl_novel where id in (${conn.escape(
    bookmarked_novels_id
  )})`;
  try {
    conn.query(query, (err, rows) => {
      if (err) {
        throw err;
      }
      return res.status(200).send(rows);
    });
  } catch (err) {
    res.send(err);
  }
});

//ADD CURRENTLY READING NOVEL
router.post("/currentnovel", (req, res) => {
  // res.send(req.body);
  const { novel_id, user_id } = req.body;
  const query =
    "INSERT INTO tbl_user_log(user_id,currently_reading) VALUES(?,?) ON DUPLICATE KEY UPDATE currently_reading = CASE WHEN FIND_IN_SET(?,tbl_user_log.currently_reading)=0 THEN CONCAT( currently_reading,',',?) ELSE currently_reading END";
  try {
    conn.query(query, [user_id, novel_id, novel_id, novel_id], (err, rows) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ message: "Insert success: Current Novel" });
    });
  } catch (err) {
    res.send(err);
  }
});

//ADD BOOKMARK
router.post("/bookmarks", (req, res) => {
  const { novel_id, user_id } = req.body;
  const query =
    "INSERT INTO tbl_user_log(user_id,bookmarks) VALUES(?,?) ON DUPLICATE KEY UPDATE bookmarks = CASE WHEN bookmarks IS NULL OR bookmarks = '' THEN CONCAT(bookmarks,?) WHEN FIND_IN_SET(?,tbl_user_log.bookmarks)=0 THEN CONCAT( bookmarks,',',?) ELSE bookmarks END";

  try {
    conn.query(
      query,
      [user_id, novel_id, novel_id, novel_id, novel_id],
      (err, rows) => {
        if (err) {
          throw err;
        }
        return res.status(200).json({ message: "Insert success: Bookmark" });
      }
    );
  } catch (err) {
    res.send(err);
  }
});

//REMOVE BOOKMARKS
router.post("/bookmarks/remove", (req, res) => {
  // console.log(req.body);
  const { id, checkUserId } = req.body;
  const query =
    " UPDATE tbl_user_log SET bookmarks = CASE WHEN bookmarks LIKE '%,?,%' THEN REPLACE(bookmarks, ',?,', ',')  WHEN bookmarks LIKE '?,%' THEN REPLACE(bookmarks, '?,', '')WHEN bookmarks LIKE '%,?' THEN REPLACE(bookmarks, ',?', '') WHEN bookmarks = '?' THEN '' END WHERE FIND_IN_SET('?', tbl_user_log.bookmarks) and user_id =?";
  const fieldData = [id, id, id, id, id, id, id, id, checkUserId];
  try {
    conn.query(query, fieldData, (err, rows) => {
      if (err) {
        throw err;
      }
      return res.status(200).json({ message: "Deletion success: Bookmark" });
    });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
