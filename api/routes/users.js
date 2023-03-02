import express from "express"
import {deleteUser, getUser, getUsers, UpdateUser } from "../controllers/user.js";
import Hotel from "../modals/Hotel.js"; 
import { createError } from "../utils/error.js";
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";
const router=express.Router();
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })
router.put("/:id",verifyUser,UpdateUser);
router.delete("/:id",verifyUser,deleteUser);
router.get("/:id",verifyUser,getUser);
router.get("/",verifyAdmin,getUsers);

export default router