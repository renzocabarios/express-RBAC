import { Router } from "express";
import {
  getAll,
  getById,
  add,
  update,
  deleteById,
  addRolesToAdmin
} from "./users.controller.js";

const router: Router = Router();
router.route("/").get(getAll).post(add);
router
  .route("/:id")
  .get(getById)
  .patch(update)
  .delete(deleteById);

router.route("/:id/roles").patch(addRolesToAdmin);

export default router;
