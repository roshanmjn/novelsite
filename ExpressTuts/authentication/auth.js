const express = require("express");
const jwt = require("jsonwebtoken");
const conn = require("../database");

const maxAge = 3 * 24 * 60 * 60;
const accessToken = (id, username) => {
  return jwt.sign(
    {
      ID: id,
      Username: username,
    },
    "whatSecretKeyIsThis?",
    { expiresIn: maxAge }
  );
};

//ADMIN LOGIN
const adminLogin = (req, res, next) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  if ((username || email) && password) {
    conn.query(
      "SELECT * FROM admin WHERE username = ?",
      [username],
      (err, rows) => {
        if (!err) {
          if (rows && Object.keys(rows).length > 0) {
            if (password === rows[0].password) {
              res.status(200).send({ login: true, message: "Login success" });
              //   res.cookie("jwt", accessToken, {
              //   withCredentials: true,
              //   httpOnly: false,
              //   maxAge: maxAge * 1000,
              // });
            } else {
              res.status(400).send({
                login: false,
                message: "Incorrect username or password",
              });
            }
          } else {
            res.status(404).send({
              login: false,
              message: "Please register first to login !",
            });
          }
        } else {
          res.status(500).send({
            login: false,
            message: "Some error occured!",
          });
        }
      }
    );
  } else {
    res.status(400).send({
      login: false,
      message: "Please enter username and password !",
    });
  }
};

//CLIENT REGISTER
const register = (req, res, next) => {
  const { username, email, password } = req.body;

  if (username) {
    conn.query(
      "SELECT * FROM tbl_users WHERE username = ?",
      [username],
      (err, rows) => {
        if (!err) {
          if (rows && Object.keys(rows).length > 0) {
            res.status(404).send("User with email already exists");
          } else if (rows && Object.keys(rows).length < 1) {
            // res.status(200).json("user can be created");
            // conn.query('INSERT INTO')
            // res.cookie("jwt", accessToken, {
            //   withCredentials: true,
            //   httpOnly: false,
            //   maxAge: maxAge * 1000,
            // });
            // res.status(200).json(req.body);
            res.status(201).json({
              message: "user has been created",
              Username: username,
              AccessToken: accessToken,
              created: true,
            });
          }
        } else {
          res.status(400).send("enter a username Register");
        }
      }
    );
  } else {
    res.status(400).json("Empty fields");
  }
};

module.exports = { adminLogin, register };
