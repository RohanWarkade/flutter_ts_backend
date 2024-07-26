"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// import userRouter from "./user.routes";
// import tweetRouter from "./tweet.routes";
const hello_routes_1 = __importDefault(require("./hello.routes"));
const tweet_routes_1 = __importDefault(require("./tweet.routes"));
const user_routes_1 = __importDefault(require("./user.routes"));
const router = (0, express_1.Router)();
router.use('/hello', hello_routes_1.default); // router to chec my server is live or not 
router.use('/user', user_routes_1.default); // user functions to do the user crud
router.use('/tweet', tweet_routes_1.default); // for tweet cruds
exports.default = router;
/////Conisder this router as gates through which api request will enter
//after this naything can happen controllerm or repo functon can run
