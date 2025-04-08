import mongoose from 'mongoose';


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
  }
}, { timestamps: true });

const Confession = mongoose.model('Confession', confessionSchema);

export default Confession;
