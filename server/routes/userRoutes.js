import express from "express"
import userAuth from "../middlewares/authMiddleware.js"
import {getUser, updateUser} from "../controllers/userController.js"

const router= express.Router();


//Get User

router.post('/get-user', userAuth, getUser);


//Update User
router.put('/update-user', userAuth, updateUser)




export default router;