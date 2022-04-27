const { Router } = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const router = Router();
const conn = require("../database");

router.use((req, res, next) => {
  console.log("REQ made to /novels route");
  next();
});

//check 'if empty'  function
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

router.get("/", (req, res) => {
  const query = "SELECT * FROM tbl_novel";
  conn.query(query, (err, rows) => {
    try {
      res.status(200).send(rows);
    } catch (err) {
      console.log(err);
    }
  });
});

//TO SELECT SPECIFIC NOVEL
router.get("/:id", (req, res) => {
  const edit_id = req.params.id;
  const query = "SELECT * FROM tbl_novel WHERE id=?";
  conn.query(query, [edit_id], (err, rows) => {
    try {
      res.status(200).send(rows);
    } catch (err) {
      res.status(404).json({ status: false, message: "Not found" });
    }
  });
});

//DELETE NOVEL
router.delete("/:id", (req, res) => {
  const query = "DELETE FROM tbl_novel WHERE id = ?";
  const delete_id = req.params.id;
  conn.query(query, delete_id, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      console.log(`error:${err}`);
    }
  });
});

//INSERT NOVEL
router.post("/upload", (req, res) => {
  const {
    id,
    name,
    genre,
    author,
    chapters,
    description,
    status,
    rating,
    start_date,
  } = req.body;
  query =
    "INSERT INTO tbl_novel(name, genre, author, chapters, description, status, rating, start_date) VALUES(?,?,?,?,?,?,?,?)";
  conn.query(
    query,
    [name, genre, author, chapters, description, status, rating, start_date],
    (err, rows) => {
      if (!err) {
        res.send(`id:${rows.insertId} successfully inserted`);
      } else {
        res.send(err);
      }
    }
  );
});

//EDIT NOVEL
router.put("/edit/:id", (req, res) => {
  const update_id = req.params.id;
  // res.send(update_id);
  const { id, author, chapters, description, genre, image, name, status } =
    req.body;
  const query =
    "UPDATE tbl_novel SET author=? ,chapters=?, description=?, genre=?, image=?, name=?, status=? WHERE id=?";
  conn.query(
    query,
    [author, chapters, description, genre, image, name, status, update_id],
    (err, rows) => {
      if (!err) {
        res.status(200).json(`id:${update_id} successfully updated`);
      } else {
        res.status(400).send(err);
        // .json({ status: false, message: `Failed to update: ${err}` });
      }
    }
  );
});

module.exports = router;
