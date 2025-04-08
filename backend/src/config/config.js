import dotenv from 'dotenv';


dotenv.config();

const config = {
  port: process.env.PORT || 8080,
  mongoURI: process.env.MONGODB_URI,
  env: process.env.NODE_ENV || 'development',
  confession_expiry: 60000, // 1 minute
}

export default config;
