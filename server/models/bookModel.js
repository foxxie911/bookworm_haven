import mongoose from "mongoose";
import { BOOK_TYPE } from "../utils/constants.js";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    publishingYear: Number,
    bookType: {
      type: String,
      enum: Object.values(BOOK_TYPE),
      default: BOOK_TYPE.PAPERBACK,
    },
    description: {
      type: String,
      default: "No description available",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", bookSchema);