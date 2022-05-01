const express = require("express");
const { Router } = require("express");
const req = require("express/lib/request");
const conn = require("../database");
const router = Router();

router.use((req, res, next) => {
  console.log("REQ made to /users route");
  next();
});

//check 'if empty'  function
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

//TO SELECT ALL USERS
router.get("/", (req, res) => {
  //SQL connection check
  const query = "SELECT * FROM tbl_users";
  conn.query(query, (err, rows) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log(err);
    }
  });
});

//  TO SELECT SPECIFIC USER
router.get("/:id", (req, res) => {
  //SQL connection check
  const query = "SELECT * FROM tbl_users WHERE id = ?";
  const { id } = req.params;
  conn.query(query, id, (err, rows) => {
    if (!isEmptyObject(rows)) {
      return res.status(200).json(rows);
    }
    return res
      .status(404)
      .json({ success: false, msg: `user id:${id} not found` });
  });
});

//TO INSERT DATA INTO USER TABLE
router.post("/create", (req, res) => {
  const { fullname, address, email, username, password, gender, timestamp } =
    req.body;
  const query =
    "INSERT INTO tbl_users (full_name, address, email, username, password, gender, created_on) VALUES(?,?,?,?,?,?,?)";
  conn.query(
    query,
    [fullname, address, email, username, password, gender, timestamp],
    (err, rows) => {
      if (!err) {
        res.status(200).json({ status: true, message: "New user created." });
      } else {
        res.status(400).json({ status: false, message: "Failed to create." });
      }
    }
  );

  // res.send(req.body);
  console.log(req.body);
});

//TO  DELETE DATA FROM USER TABLE
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM tbl_users WHERE id = ?";
  const delete_user_id = req.params.id;
  conn.query(query, [delete_user_id], (err, rows) => {
    if (!err) {
      res
        .status(200)
        .json({ status: true, message: `deleted ${rows.affectedRows} rows` });
    } else {
      res
        .status(404)
        .json({ success: false, msg: `user id:${delete_user_id} not found` });
    }
  });
});

//TO UPDATE DATA OF CERTAIN USER
router.put("/edit/:id", (req, res) => {
  const update_id = req.params.id;
  const { id, full_name, email, password, address, gender, username } =
    req.body;
  const query =
    "UPDATE tbl_users SET username=?,password=?,full_name=?,email=?,gender=?,address=? WHERE id= ?";
  conn.query(
    query,
    [username, password, full_name, email, gender, address, update_id],
    (err, rows) => {
      if (!err) {
        return res
          .status(200)
          .json({ status: true, message: "Update success." });
      } else {
        return res
          .status(400)
          .json({ status: false, message: "Update failed." });
      }
    }
  );
});

module.exports = router;
