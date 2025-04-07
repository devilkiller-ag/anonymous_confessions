import Confession from '../models/confession.model.js';


export const createConfession = async (message) => {
  return await Confession.create({ message });
}
