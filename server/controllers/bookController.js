import Book from "../models/bookModel.js";
import { StatusCodes } from "http-status-codes";

// Get All Books
export const getAllBooks = async (req, res) => {
  // console.log(req.user);
  const books = await Book.find({});
  res.status(StatusCodes.OK).json({ books });
};

// Create Book
export const createBook = async (req, res) => {
  // Only for publisher
  req.body.createdBy = req.user.userId;
  const book = await Book.create(req.body);
  res.status(StatusCodes.CREATED).json({ book });
};

// Get Single Book
export const getSingleBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.status(StatusCodes.OK).json({ book });
};

// Edit Book
export const editBook = async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "Book modified", book: updatedBook });
};

// Delete Book
export const deleteBook = async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "Book deleted", book: deletedBook });
};
