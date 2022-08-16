const { Router } = require("express");
const {
  displayNovelsController,
  weeklyPopularController,
  newOngoingController,
  editorsChoiceController,
  newAnnounceController,
  selectedNovelsController,
} = require("../controllers/userNovelsController");
const router = Router();
const conn = require("../database");

const userMiddleware = require("../middleware/authMiddleware");

//route= /novels
router.use("/novels", (req, res, next) => {
  console.log("REQ made to /userNovels route");
  next();
});

//GET ALL NOVELS
router.get("/novels", displayNovelsController);

//NEW ANNOUNCEMENT
router.get("/novels/announcements", newAnnounceController);

//SELECT PARTICULAR NOVEL
router.get("/novels/:id", selectedNovelsController);

//WEEKLY POPULAR
router.get("/novels/popular/weekly", weeklyPopularController);

//NEW ONGOING
router.get("/novels/popular/ongoing", newOngoingController);

//NEW EDITORS CHOICES
router.get("/novels/popular/editors", editorsChoiceController);

//GET ALL CHAPTER
router.get("/novels/:id/chapter", (req, res) => {
  const novel_id = req.params.id;
  const query = "SELECT * FROM tbl_novel_chapters WHERE novel_id = ?";

  conn.query(query, novel_id, (err, row) => {
    let chapter_array = [];
    if (row.length < 1) {
      res.status(404).send({ message: "No Chapter Available." });
    } else {
      row.map((data, index) => {
        // console.log(data.chapter_id, data.chapter_title);
        chapter_array.push({
          novel_id: data.novel_id,
          chapter_id: data.chapter_id,
          chapter_title: data.chapter_title,
        });
      });
      res.send(chapter_array);
    }
  });
});
//GET SINGLE CHAPTER
router.get("/novels/:id/chapter-:chapter_id", (req, res) => {
  const novel_id = req.params.id;
  const chapter_id = req.params.chapter_id;
  const query =
    "SELECT * FROM tbl_novel_chapters WHERE novel_id = ?and chapter_id=?";

  conn.query(query, [novel_id, chapter_id], (err, row) => {
    let chapterArray = [];

    if (row.length < 1) {
      res.status(404).send({ message: "No Chapter Available." });
    } else {
      row.map((data, index) => {
        // res.send(chapterArray);
        chapterArray.push({
          novel_id: data.novel_id,
          chapter_id: data.chapter_id,
          chapter_title: data.chapter_title,
          chapter_content: data.chapter_content,
        });
      });
      res.send(chapterArray);
      // console.log(chapterArray);
    }
  });
});

//ADD NEW CHAPTER
router.post("/novels/:id/add", (req, res) => {
  const chapter_id = parseInt(req.body.chapter_id);
  const novel_id = parseInt(req.params.id);
  const novel_title = req.body.title;
  const novel_content = req.body.content;
  let available = true;
  if (isNaN(chapter_id)) {
    // isNaN checks if a value is a number or not.
    res.status(404).send({ message: "Enter number please" });
  } else {
    const query = "select * from tbl_novel_chapters where novel_id=?";
    conn.query(query, [novel_id], (err, row) => {
      for (i = 0; i < row.length; i++) {
        if (row[i].chapter_id == chapter_id) {
          available = false;
          break;
        }
      }
      if (available) {
        const query2 =
          "INSERT INTO tbl_novel_chapters SET novel_id=?, chapter_id=?, chapter_title=?, chapter_content=?, upload_date = now() ";
        conn.query(
          query2,
          [novel_id, chapter_id, novel_title, novel_content],
          (err, row) => {
            if (err) {
              throw err;
            } else {
              res.send({ message: `chapter: ${chapter_id} inserted` });
            }
          }
        );
      } else {
        res
          .status(409)
          .send({ message: `chapter: ${chapter_id} already exists` });
      }
    });
  }
});
//UPDATE EXISTING CHAPTER
router.post("/novels/:id/update", (req, res) => {
  const chapter_id = parseInt(req.body.chapter_id);
  const novel_id = parseInt(req.params.id);
  const novel_title = req.body.title;
  const novel_content = req.body.content;
  let available = true;
  if (isNaN(chapter_id)) {
    // isNaN checks if a value is a number or not.
    res.status(404).send({ message: "Enter Number please" });
  } else {
    const query =
      "UPDATE tbl_novel_chapters SET chapter_title=?, chapter_content=? WHERE  novel_id=? and chapter_id=?  ";
    conn.query(
      query,
      [novel_title, novel_content, novel_id, chapter_id],
      (err, row) => {
        if (err) {
          throw err;
        } else {
          res.send({ message: `Chapter: ${chapter_id} Updated` });
        }
      }
    );
  }
});

module.exports = router;
