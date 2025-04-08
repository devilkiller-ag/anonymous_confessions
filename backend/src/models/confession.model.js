import mongoose from 'mongoose';
import config from '../config/config.js';


const confessionSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    maxlength: 200,
  },
  upvotes: {
    type: Number,
    default: 0,
  },
  downvotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: config.confession_expiry / 1000,
  }
}, { timestamps: true });

const Confession = mongoose.model('Confession', confessionSchema);

export default Confession;
