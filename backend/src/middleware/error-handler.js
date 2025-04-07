import config from '../config/config.js';

export const errorHandler = (err, req, res, next) => {
  console.error('Global Error: ', err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    sucess: false,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  });
}
