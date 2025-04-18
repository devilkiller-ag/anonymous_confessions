import ApiError from '../utils/api-error.js';
import Confession from '../models/confession.model.js';


export const createConfession = async (message) => {
  const confession = await Confession.create({ message });

  if (!confession) {
    throw new ApiError(500, 'Failed to create confession');
  }

  return confession;
}

export const getConfessions = async (page = 1, limit = 20) => {
  const skip = (page - 1) * limit;
  const totalConfessions = await Confession.countDocuments();
  const totalPages = Math.ceil(totalConfessions / limit);

  if (skip >= totalConfessions) {
    throw new ApiError(204, 'Page number exceeds total pages.');
  }

  const confessions = await Confession.find()
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  return {
    confessions,
    meta: {
      page,
      limit,
      totalPages,
      totalConfessions
    }
  };
}

export const reactToConfession = async (id, type) => {
  const update = (type === 'upvote' ? { $inc: { upvotes: 1 } } : { $inc: { downvotes: 1 } });
  const updatedConfession = await Confession.findByIdAndUpdate(id, update, { new: true });

  if (!updatedConfession) {
    throw new ApiError(404, 'Confession not found');
  }

  return updatedConfession;
}
