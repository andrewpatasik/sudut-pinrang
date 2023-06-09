import mongoose from "mongoose";

export const dbConn = async () =>
  mongoose.connect(process.env.MONGODB_URI as string);
