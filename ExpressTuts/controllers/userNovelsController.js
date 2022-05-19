const conn = require("../database");

const displayNovelsController = (req, res) => {
  const query = "SELECT * FROM tbl_novel";
  conn.query(query, (err, rows) => {
    if (!err) {
      res.status(200).send(rows);
    }
  });
};
const selectedNovelsController = (req, res) => {
  // console.log(req.params);
  const id = req.params.id;
  const query = "SELECT * FROM tbl_novel WHERE id=?";
  conn.query(query, [id], (err, rows) => {
    if (!err) {
      res.status(200).send(rows);
    }
  });
};

const weeklyPopularController = (req, res) => {
  const query = "select * from tbl_novel  ORDER BY start_date DESC limit 5";
  conn.query(query, (err, rows) => {
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

const newOngoingController = (req, res) => {
  const query =
    "select * from tbl_novel WHERE status = 'ongoing' ORDER BY start_date ASC limit 8";
  conn.query(query, (err, rows) => {
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

const editorsChoiceController = (req, res) => {
  const query = "select * from tbl_novel ORDER BY RAND() limit 4";
  conn.query(query, (err, rows) => {
    if (err) {
      throw err;
    }
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
};

const newAnnounceController = (req, res) => {
  const query =
    "select * from tbl_announcements  ORDER BY created_date ASC limit 2";
  conn.query(query, (err, rows) => {
    try {
      res.json(rows);
    } catch (err) {
      console.log(err);
    }
  });
};
module.exports = {
  displayNovelsController,
  selectedNovelsController,
  weeklyPopularController,
  newOngoingController,
  editorsChoiceController,
  newAnnounceController,
};
