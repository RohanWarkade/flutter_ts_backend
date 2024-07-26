import { Router } from "express";
import { createTweetController, deleteTweetController, getTweetController, updateTweetController } from "../controllers/tweet.controller";

const  tweetRouter = Router();

//define route path

tweetRouter.get("/:tweetId", getTweetController)
//tweetRouter.get("/", getAllweetController)

tweetRouter.post("/", createTweetController)
tweetRouter.delete("/:userId", deleteTweetController)
tweetRouter.put("/",updateTweetController)

export default tweetRouter;

