import config from '../config/config.js';

export const errorHandler = (err, req, res, next) => {
  console.error('Global Error: ', err.stack);

  const success = err.success || false;
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  });
}
