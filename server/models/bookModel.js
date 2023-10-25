import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    genre: String,
    publishingYear: Number,
    bookType: {
      type: String,
      enum: ["Hardcover", "Paperback", "eBook"],
      default: "Paperback",
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
