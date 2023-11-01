import mongoose from "mongoose";
import { BOOK_TYPE } from "../utils/constants.js";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    publishingYear: String,
    bookType: {
      type: String,
      enum: Object.values(BOOK_TYPE),
      default: BOOK_TYPE.PAPERBACK,
    },
    description: {
      type: String,
      default: "No description available",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Book", bookSchema);
