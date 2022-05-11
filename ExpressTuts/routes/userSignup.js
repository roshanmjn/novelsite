const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const conn = require("../database");
const userMiddleware = require("../middleware/authMiddleware.js");

router.use("/signup", (req, res, next) => {
  console.log("REQ made to /userSignup route");
  next();
});

//localhost:5000/signup
router.post("/signup", userMiddleware.validateRegister, (req, res, next) => {
  conn.query(
    `SELECT username FROM tbl_users WHERE LOWER(username)=LOWER('${req.body.username}')`,
    (err, result) => {
      if (err) {
        throw err;
        res.send({ message: "err query" });
      }
      if (result && result.length > 0) {
        //error
        return res
          .status(409)
          .send({ message: "This username is already in use!" });
      } else {
        //username not in use
        // bcrypt.hash(req.body.password, 10, (err, hash) => {
        //   if (err) {
        //     throw err;
        //     return res.status(500).send({ message: err });
        //   } else {
        // //uuid.v4() for user id

        conn.query(
          `INSERT INTO tbl_users(username,password,created_on)values(${conn.escape(
            req.body.username
            // )},'${hash}',now());`,
          )},'${req.body.password}',now());`,
          (err, result) => {
            if (err) {
              throw err;
              return res.status(400).send({ message: err });
            }
            return res.status(201).send({ message: "Registered !" });
          }
        );

        // });
        // }
      }
    }
  );
});

module.exports = router;
