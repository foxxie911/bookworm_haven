import User from "../models/userModel.js";
import { comparePassword, hashPassword } from "../utils/password..js";
import { StatusCodes } from "http-status-codes";
import { UnauthenticatedError } from "../errors/customErrors.js";
import { createJwt } from "../utils/tokens.js";

export const register = async (req, res) => {
  // First admin builder
  const isFirstAccount = (await User.countDocuments()) === 0;
  if (isFirstAccount) {
    req.body.role = "admin";
  }
  // Password Hashing
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  // Create User
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "User Created" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  // User login validation
  const isValidUser =
    user && (await comparePassword(req.body.password, user.password));
  if (!isValidUser) throw new UnauthenticatedError("Invalid User Credentials");

  const token = createJwt({ userId: user._id, role: user.role });

  const dayInMillisecond = 1000 * 60 * 60 * 60;

  res.cookie("jwtToken", token, {
    httpOnly: true,
    expires: new Date(Date.now() + dayInMillisecond),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "Logged in" });
};

export const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "User logged out" });
};
