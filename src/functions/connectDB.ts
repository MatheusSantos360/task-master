import mongoose from "mongoose";

const connectDB = (token: string) => {
  try {
    mongoose.connect(token);
    console.log("[Database status]: Connected.");
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
