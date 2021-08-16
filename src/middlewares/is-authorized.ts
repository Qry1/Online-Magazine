import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import InternalServerError from '../errors/internal-server-error';
import { SECRET } from '../configs/auth';

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(401).json({
      success: false,
      message: 'Please authorize first',
    });
  } else {
    try {
      jwt.verify(token, SECRET);
    } catch (error) {
      throw new InternalServerError(`${error.message}`);
    }
  }

  next();
};
