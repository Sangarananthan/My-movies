import mongoose from "mongoose";
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/moviesApp";
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Successfully connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
