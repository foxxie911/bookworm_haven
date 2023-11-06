import { Router } from "express";
const router = Router();
import {
  getCurrentUser,
  getBuyingStats,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middlewares/validators.js";
import { authorizePermissions } from "../middlewares/authMiddlewares.js";
import upload from "../middlewares/multerMiddleware.js";

router.route("/current-user").get(getCurrentUser);
router
  .route("/admin/app-stats")
  .get(authorizePermissions("admin"), getBuyingStats);
router.route("/update-user").patch(upload.single('avatar'), validateUpdateUserInput, updateUser);

export default router;
