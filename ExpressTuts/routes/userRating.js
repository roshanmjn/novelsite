const router = require("express").Router();
const conn = require("../database");
const { requireAuth } = require("../middleware/authMiddleware");

router.use("/rating", (req, res, next) => {
  console.log("REQ made to /rating userRating route");
  next();
});

router.get("/rating", requireAuth, (req, res) => {
  res.send("oks");
});

//CHECK IF RATING EXISTS OF A USER FOR A PARTICULAR NOVEL
router.post("/rating/check", (req, res) => {
  const { user_id, novel_id } = req.body;
  // res.send(req.body);
  const query =
    "SELECT * FROM tbl_novel_rating WHERE user_id=? and novel_id=? ";
  try {
    //CHECK IF RATING ALREADY EXIST, THEN:
    conn.query(query, [user_id, novel_id], (err, rows) => {
      if (!err) {
        if (rows.length > 0) {
          console.log(rows);
          res.status(200).send({
            message: "Rating already exists.",
            rating_exist: true,
            rating: rows[0].rating,
          });
        } else if (rows.length < 1) {
          //CHECK IF RATING DOESNT EXIST, THEN:
          res
            .status(200)
            .send({ message: "Rating does not exists.", rating_exist: false });
        }
      } else {
        res.send(err);
      }
    });
  } catch (err) {
    res.status(400).send("Invalid Parameters");
  }
});

//INSERT A NEW USER RATING FOR A NOVEL
router.post("/rating", (req, res) => {
  const { user_id, novel_id, rating } = req.body;
  const query1 =
    "SELECT * FROM tbl_novel_rating WHERE user_id=? and novel_id=?";
  const query2 =
    "INSERT INTO tbl_novel_rating(user_id,novel_id,rating) VALUES(?,?,?) ON DUPLICATE KEY UPDATE rating = VALUES(rating)";
  try {
    //CHECK IF RATING ALREADY EXIST, THEN:
    conn.query(query1, [user_id, novel_id], (err, rows) => {
      if (!err) {
        if (rows.length > 0) {
          res.status(409).send("This novel has already been rated.");
        } else if (rows.length < 1) {
          //CHECK IF RATING DOESNT EXIST, THEN:
          conn.query(query2, [user_id, novel_id, rating], (err, rows) => {
            if (!err) {
              res.status(200).send({ message: "Rating successful" });
            } else {
              res.send(err);
            }
          });
        }
      } else {
        res.send(err);
      }
    });
  } catch (err) {
    res.send(400).send("connection error");
  }
});
module.exports = router;
