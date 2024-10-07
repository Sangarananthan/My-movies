//Packages
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";

//Files
import connectDB from "./config/db.js";

//Configuration
dotenv.config();
connectDB();

const app = express();

//Middleware
app.use(express.json()); // To parse JSON bodies (needed for POST requests)
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies (needed for POST requests)
app.use(cookieParser); // To parse cookies in the request

const PORT = process.env.PORT || 3000;

//Routes
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
