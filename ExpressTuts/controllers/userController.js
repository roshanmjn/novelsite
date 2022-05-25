const conn = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const userLoginController = (req, res) => {
  const maxAge = 60 * 60 * 24;
  conn.query(
    `SELECT * FROM tbl_users WHERE username =${conn.escape(
      req.body.username
    )};`,
    (err, result) => {
      if (err) {
        throw err;
      }
      if (!result.length) {
        return res.status(400).json({
          message: "username or password incorrect -username",
        });
      }

      // bcrypt.compare(
      //   req.body.password,
      //   result[0]["password"],
      //     if (bErr) {
      //       throw err;
      //       return res.status(300).send({
      //         message: "username or password incorrect",
      //       });
      //     }
      //     if (bResult) {
      //       //pasword match
      //       const token = jwt.sign(
      //         {
      //           username: result[0].username,
      //           userId: result[0].id,
      //         },
      //         "whatSecretKeyIsThis?",
      //         { expiresIn: "7d" }
      //       );
      //       // conn.query(
      //       //   `UPDATE tbl_users last_login = now() WHERE id = ${result[0].id};`
      //       // );
      //       return res
      //         .status(200)
      //         .send({ message: "Logged in", token, user: result[0] });
      //     }
      //     return res
      //       .status(400)
      //       .send({ message: "username or password incorrect" });
      //   }
      // );

      if (req.body.password == result[0]["password"]) {
        const token = jwt.sign(
          {
            username: result[0].username,
            userId: result[0].id,
          },
          process.env.USER_ACCESS_TOKEN_SECRET,
          { expiresIn: "1d" }
        );
        res.cookie("jwt", `${token}`, {
          httpOnly: false,
          secure: false,
          expires: new Date(Date.now() + 86400000),
        });

        res.status(200).json({
          message: "Logged in",
          username: result[0].username,
          id: result[0].id,
        });
      } else {
        return res.status(300).json({
          message: "username or password incorrect -pass",
        });
      }
    }
  );
};

const userLogoutController = (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: false,
    secure: false,
    expires: new Date(Date.now() + 1000),
  });
  res.send("exp");
};

const userSignupController = (req, res, next) => {
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
};
module.exports = {
  userLoginController,
  userLogoutController,
  userSignupController,
};
