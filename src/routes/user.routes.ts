import { Router } from "express";
import { getUserController, createUserController, deleteUserController, updateUserController } from "../controllers/user.controller";

const  userRouter = Router();

//define route path

userRouter.get("/:userId", getUserController)
userRouter.post("/", createUserController)
userRouter.delete("/:userId", deleteUserController)
userRouter.put("/",updateUserController)

export default userRouter;

//every end point is going to call one controller fucntion
// when this endpoint are hit this are going to call repo functions