import mongoose from "mongoose";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";
import { body, param, validationResult } from "express-validator";
import { BOOK_TYPE } from "../utils/constants.js";
import Book from "../models/bookModel.js";
import User from "../models/userModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        const errorMessages = error.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("No book")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("You are not authorized")) {
          throw new UnauthorizedError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// // Test validator for test POST
// export const validateTest = withValidationErrors([
//   body("name")
//     .notEmpty()
//     .withMessage("Name is Required")
//     .isLength({ min: 3, max: 50 })
//     .withMessage("Name must be under 50 characters."),
// ]);

// Book Validator
export const validateBookInput = withValidationErrors([
  body("title").notEmpty().withMessage("Book title is require\n"),
  body("author").notEmpty().withMessage("Author is required\n"),
  body("genre").notEmpty().withMessage("Genre is required\n"),
  body("publishingYear")
    .notEmpty()
    .withMessage("Publishing Year is required\n"),

  body("bookType")
    .isIn(Object.values(BOOK_TYPE))
    .withMessage("Invalid Book Type"),
]);

// Mongoose ID validator
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId)
      throw new BadRequestError(`Invalid MongoDB ID ${value}`);
    const book = await Book.findById(value);
    if (!book) throw new NotFoundError(`No book exist with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === book.createdBy.toString();

    if (!isAdmin && !isOwner)
      throw new UnauthorizedError(
        "You are not authorized to access this route"
      );
  }),
]);

// Validate Register
export const validateRegisterInput = withValidationErrors([
  body("fname").notEmpty().withMessage("First name is required"),
  body("lname").notEmpty().withMessage("Last name is required"),
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .custom(async (username) => {
      const user = await User.findOne({ username });
      if (user) throw new BadRequestError("This username is already taken");
    }),
  body("email")
    .notEmpty()
    .withMessage("E-mail is required")
    .isEmail()
    .withMessage("Invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new BadRequestError("E-mail already exist");
    }),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 characters long")
    .isStrongPassword()
    .withMessage(
      "Password is not strong enough, try adding symbols, uppercase & lowercase letters"
    ),
  body("address").notEmpty().withMessage("Address is required"),
]);

export const validateLoginInput = withValidationErrors([
  body("username").notEmpty().withMessage("Username is empty"),
  body("password").notEmpty().withMessage("Password is empty"),
]);
