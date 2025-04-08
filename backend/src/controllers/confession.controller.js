import mongoose from 'mongoose';
import config from '../config/config.js';
import ApiError from '../utils/api-error.js';
import asyncWrapper from '../utils/async-wrapper.js';
import * as confessionService from '../services/confession.service.js';


export const createConfession = asyncWrapper(async (req, res) => {
  const { message } = req.body;

  if (!message || message.trim() === '') {
    throw new ApiError(400, 'Confession message is required');
  }

  if (message.length > 200) {
    throw new ApiError(400, 'Confession message cannot exceed 200 characters');
  }

  const confession = await confessionService.createConfession(message);

  req.io.emit('new_confession', confession);

  setTimeout(() => {
    req.io.emit('confession_expired', confession._id);

  }, config.confession_expiry);

  res.status(201).json({
    success: true,
    data: confession
  });
});

export const getConfessions = asyncWrapper(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;

  if (page < 1 || limit < 1) {
    throw new ApiError(400, 'Page and limit must be positive integers');
  }

  const result = await confessionService.getConfessions(page, limit);
  res.status(200).json({
    success: true,
    data: result.confessions,
    meta: result.meta
  });
});

export const reactToConfession = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, 'Invalid confession ID');
  }

  const validTypes = new Set(['upvote', 'downvote']);
  if (!validTypes.has(type)) {
    throw new ApiError(400, 'Reaction type must be "upvote" or "downvote"');
  }

  const updatedConfession = await confessionService.reactToConfession(id, type);

  req.io.emit('update_reaction', updatedConfession);
  res.status(200).json({
    success: true,
    data: updatedConfession
  });
});
