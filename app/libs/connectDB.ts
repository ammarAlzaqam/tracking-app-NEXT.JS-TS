import mongoose from "mongoose";

let MONGOOSE_DB_URL = process.env.DB_URL as string;

if (!MONGOOSE_DB_URL) {
  throw new Error("⚠️ DB_URL not defined");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGOOSE_DB_URL)
      .then((mongooseConn) => {
        console.log("✅ Connected to MongoDB (cached)");
        return mongooseConn;
      })
      .catch((e) => {
        console.log("❌ MongoDB connection failed");
        console.error(`Error: ${e}`);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
