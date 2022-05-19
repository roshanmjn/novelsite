const jwt = require("jsonwebtoken");
const conn = require("../database");

//check 'if empty'  function
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

//SELECT ALL USERS
const displayUserController = (req, res) => {
  //SQL connection check
  const query = "SELECT * FROM tbl_users";

  conn.query(query, (err, rows) => {
    try {
      res.send(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

//SELECT ALL SPECIFIC USERS
const displaySelectedUserController = (req, res) => {
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
};

//INSERT INTO USERS
const insertUserController = (req, res) => {
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
};

//DELETE A USER
const deleteUserController = (req, res) => {
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
};

//EDIT USER DATA
const updateUserController = (req, res) => {
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
};

//CHECK IF LOGIN CREDENTIALS FOR ADMIN
const adminLoginController = (req, res) => {
  conn.query(
    `SELECT * FROM admin WHERE username =${conn.escape(req.body.username)};`,
    (err, result) => {
      if (err) {
        throw err;
      }
      if (!result.length) {
        res.status(400).send({ message: "no such user found !" });
      }
      // console.log(req.body.password);
      // console.log(result[0]);
      if (req.body.password == result[0].password) {
        const token = jwt.sign(
          {
            username: result[0].username,
            adminId: result[0].id,
          },
          "adminSecretKeyIsThis?",
          { expiresIn: "1d" }
        );
        res.cookie("jwtadmin", `${token}`, {
          httpOnly: false,
          secure: false,
          expires: new Date(Date.now() + 3600000),
        });
        res.status(200).json({ message: "Logged In !" });
      } else {
        return res.status(300).json({
          message: "username or password incorrect -password",
        });
      }
    }
  );
};

//EXPIRE THE CURRENT COOKIE FOR LOGOUT
const adminLogoutController = (req, res) => {
  res.cookie("jwtadmin", "", {
    httpOnly: false,
    secure: false,
    expires: new Date(Date.now() + 1000),
  });
  res.send("token Expired");
};

module.exports = {
  adminLoginController,
  adminLogoutController,
  displayUserController,
  displaySelectedUserController,
  insertUserController,
  deleteUserController,
  updateUserController,
};
