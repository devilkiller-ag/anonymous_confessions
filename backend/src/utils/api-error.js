export default class ApiError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.success = false;
    this.name = 'ApiError';
    this.statusCode = statusCode;
  }
}
