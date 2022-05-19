const conn = require("../database");

//check 'if empty'  function
function isEmptyObject(obj) {
  return !Object.keys(obj).length;
}

//SELECT ALL NOVELS
const allNovelController = (req, res) => {
  const query = "SELECT * FROM tbl_novel";
  conn.query(query, (err, rows) => {
    try {
      res.status(200).send(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

//SELECT SPECIFIC NOVEL
const specificNovelController = (req, res) => {
  const edit_id = req.params.id;
  const query = "SELECT * FROM tbl_novel WHERE id=?";
  conn.query(query, [edit_id], (err, rows) => {
    try {
      res.status(200).send(rows);
    } catch (err) {
      res.status(404).json({ status: false, message: "Not found" });
    }
  });
};

//TO INSERT A NEW NOVEL
const insertNovelController = (req, res) => {
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
};

//TO UPDATE A SPECIFIC NOVEL
const updateNovelController = (req, res) => {
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
};
//TO DELETE A NOVEL
const deleteNovelController = (req, res) => {
  const query = "DELETE FROM tbl_novel WHERE id = ?";
  const delete_id = req.params.id;
  conn.query(query, delete_id, (err, result) => {
    if (!err) {
      res.send(result);
    } else {
      console.log(`error:${err}`);
    }
  });
};

//GENRE

//SELECT ALL GENRE AVAILABLE
const novelGenreController = (req, res) => {
  const query = "SELECT * FROM tbl_genre";
  conn.query(query, (err, rows) => {
    try {
      res.status(200).json(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

//SELECT SPECIFIC GENRE
const specificGenreController = (req, res) => {
  const edit_id = req.params.id;
  const query = "SELECT * FROM tbl_genre WHERE id=?";
  conn.query(query, [edit_id], (err, rows) => {
    try {
      if (!err) {
        if (rows.length == 0) {
          res
            .status(404)
            .json({ message: `GENRE WITH ID:${edit_id} NOT FOUND !!!` });
        } else {
          res.status(200).send(rows);
        }
      }
    } catch (err) {
      res.status(404).json({ status: false, message: "Not found" });
    }
  });
};
//TO INSERT A NEW GENRE
const insertGenreController = (req, res) => {
  const { title, description, status } = req.body;
  query = "INSERT INTO tbl_genre SET title =?, description=?, status=?;";
  conn.query(query, [title, description, status], (err, rows) => {
    if (!err) {
      res.send(`id:${rows.insertId} successfully inserted`);
    } else {
      res.send(err);
    }
  });
};

//TO UPDATE A SPECIFIC NOVEL GENRE
const updateGenreController = (req, res) => {
  const update_id = req.params.id;
  // res.send(update_id);
  const { id, title, description, status } = req.body;
  const query =
    "UPDATE tbl_genre SET title=? ,  description=?,status=? WHERE id=?";
  conn.query(query, [title, description, statusnpo, update_id], (err, rows) => {
    if (!err) {
      res.status(200).json({ message: `id:${update_id} successfully updated` });
    } else {
      // res.status(400).send(err);
      // throw err;
      // .json({ status: false, message: `Failed to update: ${err}` });
    }
  });
};

//TO DELETE A NOVEL GENRE
const deleteGenreController = (req, res) => {
  const query = "DELETE FROM tbl_genre WHERE id = ?";
  const delete_id = req.params.id;
  conn.query(query, delete_id, (err, result) => {
    if (!err) {
      res.send({ message: `id:${delete_id}Successfully Deleted` });
    } else {
      console.log(`error:${err}`);
    }
  });
};

module.exports = {
  allNovelController,
  novelGenreController,
  specificNovelController,
  updateNovelController,
  deleteNovelController,
  insertGenreController,
  deleteGenreController,
  insertNovelController,
  updateGenreController,
  specificGenreController,
};
