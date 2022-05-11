const { Router } = require("express");
const router = Router();
const conn = require("../database");

const userMiddleware = require("../middleware/authMiddleware");

//route= /novels
router.use("/novels", (req, res, next) => {
  console.log("REQ made to /userNovels route");
  next();
});

router.get("/novels", (req, res) => {
  //   res.send("ok");-+

  const query = "SELECT * FROM tbl_novel";
  conn.query(query, (err, rows) => {
    if (!err) {
      res.status(200).send(rows);
    }
  });
});
// //Editors Choice
// router.get("/novels/popular/editors", (req, res) => {
//   const query = "select * from tbl_novel WHERE ORDER BY start_date ASC limit 8";
//   conn.query(query, (err, rows) => {
//     try {
//       res.json(rows);
//     } catch (err) {
//       console.log(err);
//     }
//   });
// });

//WEEKLY POPULAR
router.get("/novels/popular/weekly", (req, res) => {
  const query = "select * from tbl_novel  ORDER BY start_date DESC limit 5";
  conn.query(query, (err, rows) => {
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
});
//NEW ONGOING
router.get("/novels/popular/ongoing", (req, res) => {
  const query =
    "select * from tbl_novel WHERE status = 'ongoing' ORDER BY start_date ASC limit 8";
  conn.query(query, (err, rows) => {
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
});

//NEW ANNOUNCEMENT
router.get("/novels/announcements", (req, res) => {
  const query =
    "select * from tbl_announcements  ORDER BY created_date ASC limit 2";
  conn.query(query, (err, rows) => {
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
});

module.exports = router;
