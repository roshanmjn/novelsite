const { Router } = require("express");
const router = Router();
const conn = require("../database");

const path = require("path");
const { adminLoggedIn } = require("../middleware/authAdmin");
// prettier-ignore
const { novelGenreController, allNovelController, specificNovelController, deleteNovelController, insertNovelController,  updateNovelController,  deleteGenreController,  updateGenreController,  insertGenreController,  specificGenreController,} = require("../controllers/adminNovelController");

const multer = require("multer");

let imageName;
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    imageName = Date.now() + "-" + file.originalname.trim();
    cb(null, imageName);
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

// INSERT NOVEL
// prettier-ignore
router.post(
  "/admin/novels/upload", upload.single("image_upload"), insertNovelController);

//EDIT NOVEL
router.put(
  "/admin/novels/edit/:id",
  upload.single("image"),
  updateNovelController
);

//GENRE

//EDIT GENRE
router.put("/admin/novels/genre/:id", updateGenreController);

//INSERT GENRE
router.post("/admin/novels/genre/insert", insertGenreController);

//DELETE GENRE
router.delete("/admin/novels/genre/:id", deleteGenreController);

module.exports = router;
