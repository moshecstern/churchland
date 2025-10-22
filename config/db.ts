import mongoose from 'mongoose';

const db = process.env.MONGODB_URI || "mongodb://localhost:27017/healthcare";

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
    process.exit(1);
  }
};

export default connectDB;
