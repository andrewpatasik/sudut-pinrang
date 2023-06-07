import mongoose from "mongoose";

export const db = async () =>
  mongoose.connect(process.env.MONGODB_URI as string);
