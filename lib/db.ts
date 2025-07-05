// lib/db.ts
import mongoose from 'mongoose'

const MONGO_URL = process.env.MONGO_URL!

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(MONGO_URL, {
      bufferCommands: false, // optional but helpful
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ DB Connection Error:', err);
    throw err;
  }
};
