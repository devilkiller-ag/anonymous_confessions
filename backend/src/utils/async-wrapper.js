import ApiError from "./api-error.js";


export const asyncWrapper = (fn) => {
  return (req, res, next) => {
    try {
      // To handle asynchronous errors - when the function is async and returns a promise.
      Promise.resolve(fn(req, res, next)).catch((err) => {
        if (err instanceof Error) {
          return next(err);
        }

        const apiError = new ApiError(500, 'Internal Server Error');
        next(apiError);
      });
    } catch (err) {
      // To catch and handle synchronous errors - when the function is not async and throws an error directly.
      if (err instanceof Error) {
        return next(err);
      }

      const apiError = new ApiError(500, 'Internal Server Error');
      next(apiError);
    }
  };
}

export default asyncWrapper;
