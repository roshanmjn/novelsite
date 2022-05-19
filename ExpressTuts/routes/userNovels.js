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

router.get("/novels/:id", selectedNovelsController);

//WEEKLY POPULAR
router.get("/novels/popular/weekly", weeklyPopularController);

//NEW ONGOING
router.get("/novels/popular/ongoing", newOngoingController);

//NEW EDITORS CHOICES
router.get("/novels/popular/editors", editorsChoiceController);

module.exports = router;
