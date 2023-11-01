import { StatusCodes } from "http-status-codes";
import Book from "../models/bookModel.js";
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.withoutPassword();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getBuyingStats = async (req, res) => {
  const userCount = await User.countDocuments();
  const bookCount = await Book.countDocuments();
  res.status(StatusCodes.OK).json({ userCount, bookCount });
};

export const updateUser = async (req, res) => {
  const unPassUser = { ...req.body };
  delete unPassUser.password;
  console.log(unPassUser);
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, unPassUser);
  res.status(StatusCodes.OK).json({ msg: "User updated" });
};
