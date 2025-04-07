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
  res.status(200).json(confession);
});
