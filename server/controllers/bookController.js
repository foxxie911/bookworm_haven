import Book from "../models/bookModel.js";

import { nanoid } from "nanoid";

// Test DATA
// let books = [
//   {
//     id: nanoid(),
//     title: "Fourth Wing",
//     author: "Rebecca Yarros",
//     genre: "Fantasy",
//     publishYear: 2023,
//     bookType: "Hardcover",
//   },
//   {
//     id: nanoid(),
//     title: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
//     author: "Susan Cain",
//     genre: "Psychology",
//     publishingYear: 2012,
//     bookType: "Paperback",
//   },
// ];

export const getAllBooks = async (req, res) => {
  const books = await Book.find({})
  res.status(200).json({ books });
};

export const createBook = async (req, res) => {
  try {
    const { title, author, genre, publishingYear, bookType, description } = req.body;
    const book = await Book.create({
      title,
      author,
      genre,
      publishingYear,
      bookType,
      description,
    });
    res.status(201).json({ book });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  const book = books.find((jobs) => jobs.id === id);
  if (!job) {
    throw new Error("No job with given ID");
    return res.status(404).json({ msg: `No job with the id ${id}` });
  }
  res.status(200).json({ job });
};

export const deleteBook = async (req, res) => {
  const {id} = req.params;
  const removedBook = await Book.findByIdAndRemove(id);
  if(!removedBook){
    return res.status(404).json({msg: `No book found with id ${id}`});
  }
  res.status(200).json({ msg: 'Book deleted', book: removedBook });
};
