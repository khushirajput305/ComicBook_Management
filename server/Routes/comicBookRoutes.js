const express = require("express");
const {
  createComicBook,
  getComics,
  getComicBookById,
  updateComicBook,
  deleteComicBook,
} = require("../controllers/comicBookController");

const router = express.Router();

router.post("/create", createComicBook);
router.get("/get", getComics);
router.get("/comic/:id", getComicBookById);
router.put("/update/:id", updateComicBook);
router.delete("/delete/:id", deleteComicBook);

module.exports = router;
