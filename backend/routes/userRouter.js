const express = require("express");
const userRouter = express.Router();
const registerUserController = require("../controllers/userController");

userRouter.route("/").post();

module.exports = userRouter;
