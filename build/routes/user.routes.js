"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRouter = (0, express_1.Router)();
//define route path
userRouter.get("/:userId", user_controller_1.getUserController);
userRouter.post("/", user_controller_1.createUserController);
userRouter.delete("/:userId", user_controller_1.deleteUserController);
userRouter.put("/", user_controller_1.updateUserController);
exports.default = userRouter;
//every end point is going to call one controller fucntion
// when this endpoint are hit this are going to call repo functions
