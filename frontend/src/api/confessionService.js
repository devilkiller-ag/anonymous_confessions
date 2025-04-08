import api, { safeRequest } from './apiClient';

const CONFESSION_API_ENDPOINT = '/api/confessions';

export const fetchConfessions = () =>
  safeRequest(() => api.get(CONFESSION_API_ENDPOINT));

export const postConfession = (message) =>
  safeRequest(() => api.post(CONFESSION_API_ENDPOINT, { message }));

export const reactToConfession = (id, type) =>
  safeRequest(() => api.patch(`/api/confessions/${id}/react`, { type }));
