import mongoose from 'mongoose';

import config from './../config/config.js';


const connectDB = async () => {
  try {
    await mongoose.connect(config.port);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
