const ComicBook = require("../models/comicBookModel");

//create a comic book
exports.createComicBook = async (req, res) => {
  try {
    const comicBook = new ComicBook(req.body);
    await comicBook.save();
    res.status(200).json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all comic books with filtering, pagination, and sorting
exports.getComics = async (req, res) => {
  try {
    const { author, year, condition, sortBy = 'name', order = 'asc', page = 1, limit = 10 } = req.query;

    let query = {};
    if (author) query.author = author;
    if (year) query.year = year;
    if (condition) query.condition = condition;

    let sortCriteria = {};
    sortCriteria[sortBy] = order === 'asc' ? 1 : -1;

    const comics = await ComicBook.find(query)
      .sort(sortCriteria)
      .limit(limit * 1)
      .skip((page - 1) * limit);

    res.json(comics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a comic book by ID
exports.getComicBookById = async (req, res) => {
  try {
    const comicBook = await ComicBook.findById(req.params.id);
    if (!comicBook)
      return res.status(404).json({ message: "Comic book not found" });
    res.status(200).json(comicBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Update a comic Book
exports.updateComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!comicBook)
      return res.status(404).json({ message: "Comic book not found" });
    res.status(200).json(comicBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a comic book
exports.deleteComicBook = async (req, res) => {
  try {
    const comicBook = await ComicBook.findByIdAndDelete(req.params.id);
    if (!comicBook)
      return res.status(404).json({ message: "Comic book not found" });
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
