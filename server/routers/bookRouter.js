import { Router } from "express";
import { validateBookInput, validateIdParam } from "../middlewares/validators.js";
const router = Router();

import {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
  deleteBook,
} from "../controllers/bookController.js";

router.route("/").get(getAllBooks).post(validateBookInput, createBook);

router
  .route("/:id")
  .get(validateIdParam, getSingleBook)
  .patch(validateIdParam ,validateBookInput, editBook)
  .delete(validateIdParam, deleteBook);

export default router;
