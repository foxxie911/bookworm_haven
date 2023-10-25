import { Router } from "express";
const router = Router();

import {
  getAllBooks,
  createBook,
  getSingleBook,
  deleteBook,
} from "../controllers/bookController.js";

router.get("/", getAllBooks);
router.post("/", createBook);

router.get("/:id", getSingleBook);

router.delete("/:id", deleteBook);

export default router;
