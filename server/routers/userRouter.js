import { Router } from "express";
const router = Router();
import {
  getCurrentUser,
  getBuyingStats,
  updateUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middlewares/validators.js";
import { authorizePermissions } from "../middlewares/authMiddlewares.js";

router.route("/current-user").get(getCurrentUser);
router
  .route("/admin/app-stats")
  .get(authorizePermissions("admin"), getBuyingStats);
router.route("/update-user").patch(validateUpdateUserInput, updateUser);

export default router;
