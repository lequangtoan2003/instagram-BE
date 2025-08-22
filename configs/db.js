import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { connect } from "mongoose";

const dbURI =
  process.env.MONGODB_URI ||
  "mongodb+srv://lequangtoan1904:uuVxROc9SaA12F6o@cluster0.iyngeme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    await mongoose.connect(dbURI);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
