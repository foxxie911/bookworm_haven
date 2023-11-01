import { Router } from "express";
const router = Router();

import { register, login, logout } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middlewares/validators.js";

router.route("/register").post(validateRegisterInput, register);
router.route("/login").post(validateLoginInput, login);
router.route("/logout").get(logout);

export default router;
