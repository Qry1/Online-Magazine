import { ErrorRequestHandler } from 'express';

export const errorhandler: ErrorRequestHandler = (error, req, res) => {
  const { message, status } = error;

  res.status(status || 500).json({
    success: false,
    message: message || 'Something went wrong',
  });
};
