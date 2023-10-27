import { Router } from "express";
const router = Router();

import {
  getAllBooks,
  createBook,
  getSingleBook,
  editBook,
  deleteBook,
} from "../controllers/bookController.js";

router.get("/", getAllBooks);
router.post("/", createBook);

router.get("/:id", getSingleBook);
router.patch("/:id", editBook);
router.delete("/:id", deleteBook);

export default router;
