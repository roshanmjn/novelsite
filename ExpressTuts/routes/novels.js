const { Router } = require("express");
const router = Router();
const conn = require("../database");
const multer = require("multer");
const path = require("path");
const { adminLoggedIn } = require("../middleware/authAdmin");
const {
  novelGenreController,
  allNovelController,
  specificNovelController,
  deleteNovelController,
  insertNovelController,
  updateNovelController,
  deleteGenreController,
  updateGenreController,
  insertGenreController,
  specificGenreController,
} = require("../controllers/adminNovelController");

//image storage destination
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "Images");
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.use("/admin/novels", (req, res, next) => {
  console.log("REQ made to /admin/novels route");
  next();
});
//GET ALL NOVELS
router.get("/admin/novels/", adminLoggedIn, allNovelController);

//GET NOVEL GENRE
router.get("/admin/novels/genre", novelGenreController);

//GET SPECIFIC NOVEL
router.get("/admin/novels/:id", specificNovelController);

//GET SPECIFIC GENRE
router.get("/admin/novels/genre/:id", specificGenreController);

//DELETE NOVEL
router.delete("/admin/novels/:id", deleteNovelController);

//INSERT NOVEL
router.post("/admin/novels/upload", insertNovelController);

//EDIT NOVEL
router.put("/admin/novels/edit/:id", updateNovelController);

//GENRE

//EDIT GENRE
router.put("/admin/novels/genre/:id", updateGenreController);

//INSERT GENRE
router.post("/admin/novels/genre/insert", insertGenreController);

//DELETE GENRE
router.delete("/admin/novels/genre/:id", deleteGenreController);

//UPLOAD  GENRE
router.post(
  "/admin/novels/uploadI",
  upload.single("image_upload"),
  (req, res) => {
    res.send("image uploaded");
  }
);
module.exports = router;
