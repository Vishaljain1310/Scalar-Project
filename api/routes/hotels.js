import express from "express"
import { createHotel, deleteHotel, getHotel, getHotels, UpdateHotel,countByCity, countByType, getHotelRooms } from "../controllers/hotel.js";
import Hotel from "../modals/Hotel.js"; 
import { verifyToken,verifyUser,verifyAdmin } from "../utils/verifyToken.js";
import { createError } from "../utils/error.js";
const router=express.Router();
router.post("/",verifyAdmin,createHotel);
router.put("/:id",verifyAdmin,UpdateHotel);
router.delete("/:id",verifyAdmin,deleteHotel);
router.get("/find/:id",getHotel);
router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);
export default router