import { Request, Response, NextFunction } from 'express';

const checkRequest = (fn: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await fn(req, res, next);
  } catch ({ message, status }) {
    res.status(status || 500).json({
      success: false,
      message: message || 'Something went wrong',
    });

    next();
  }
};

export default checkRequest;
