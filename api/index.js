// const express = required('express');

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import userRoute from "./routes/users.js"
import cookieParser from "cookie-parser";
import cors from "cors";
const app =express()
dotenv.config();
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb");
      } catch (error) {
        throw error;
      }
  };
  mongoose.connection.on("disconnected",()=>{
    console.log("mongoDb disconnected");
  })
  mongoose.connection.on("connected",()=>{
    console.log("mongoDb connected");
  })
  app.get("/",(req,res)=>{
  res.send("hello first request");
})
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/hotels",hotelRoute);
app.use("/api/rooms",roomRoute);
app.use("/api/users",userRoute);
app.use((err,req,res,next)=>{
  // console.log("Hii, I am a middleware");
  const errorStatus=err.status || 500
  const errorMessage=err.message || "Something wnet wrong!"
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  });
})
app.listen(8600,()=>{
    connect();
    console.log("connected to backend");
});
// console.log(a);
