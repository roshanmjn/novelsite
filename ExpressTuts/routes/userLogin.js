const router = require("express").Router();
const conn = require("../database");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userMiddleware = require("../middleware/users");

//route= /login
router.use("/login", (req, res, next) => {
  console.log("REQ made to /userLogin route");
  next();
});

//handle errors
const handleErrors = (err) => {
  console.log(err);
  let errors = { email: "", password: "" };
};

router.post("/login", userMiddleware.validateLogin, (req, res) => {
  conn.query(
    `SELECT * FROM tbl_users WHERE username =${conn.escape(
      req.body.username
    )};`,
    (err, result) => {
      if (err) {
        throw err;
        return res.status(400).json({ message: err });
      }
      if (!result.length) {
        handleErrors(  )
        return res.status(400).json({
          message: "username or password incorrect -username",
        });
      }

      // bcrypt.compare(
      //   req.body.password,
      //   result[0]["password"],
      //   (bErr, bResult) => {
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
        const token = "gg";
        const token1 = jwt.sign(
          {
            username: result[0].username,
            userId: result[0].id,
          },
          "whatSecretKeyIsThis?",
          { expiresIn: "1d" }
        );
        return res
          .status(200)
          .json({ message: "Logged in", token, user: result[0] });
      } else {
        return res.status(300).json({
          message: "username or password incorrect -pass",
        });
      }
    }
  );
});

module.exports = router;
