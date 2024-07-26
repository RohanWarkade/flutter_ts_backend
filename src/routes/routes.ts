import { Router } from "express";
// import userRouter from "./user.routes";
// import tweetRouter from "./tweet.routes";
import helloRouter from "./hello.routes";
import tweetRouter from "./tweet.routes";
import userRouter from "./user.routes";



const  router =  Router()

router.use('/hello', helloRouter) // router to chec my server is live or not 
router.use('/user', userRouter)  // user functions to do the user crud
router.use('/tweet', tweetRouter) // for tweet cruds

export default router;


/////Conisder this router as gates through which api request will enter
//after this naything can happen controllerm or repo functon can run