const router = require("express").Router();
const conn = require("../database");

// router.use("/check", (req, res, next) => {
//   console.log("REQ made to /check USerCheck route");
//   next();
// });

// router.get("/check/:username/username", (req, res) => {
//   const username = req.params.username;
//   const query = "SELECT username FROM tbl_users WHERE username = ?";
//   conn.query(query, username, (err, row) => {
//     if (row.length > 0) {
//       // res.send({ usernameAvailable: false });
//       res.send(false);
//     } else {
//       // res.send({ usernameAvailable: true });
//       res.send(true);
//     }
//   });
// });

// router.get("/check/:email/email", (req, res) => {
//   const email = req.params.email;
//   const query = "SELECT email FROM tbl_users WHERE email = ?";
//   conn.query(query, email, (err, row) => {
//     if (row.length > 0) {
//       res.send(false);
//     } else {
//       res.send(true);
//     }
//   });
// });

module.exports = router;
