import dotenv from "dotenv";
dotenv.config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/postsdb";
export const PORT = process.env.PORT || 3000;
