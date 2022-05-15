import { Router } from "express";
import { LoginController } from "src/presentation/controllers/login-controller";
import { CreateUserController } from "src/presentation/controllers/create-user-controller";
import { UpdateUserController } from "src/presentation/controllers/update-user-controller";
import { DeleteUserController } from "src/presentation/controllers/delete-user-controller";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ status: "Running..." });
});

router.post("/login", new LoginController().handle);
router.put("/register", new CreateUserController().handle);
router.patch("/update", new UpdateUserController().handle);
router.delete("/remove", new DeleteUserController().handle);

export default router;
