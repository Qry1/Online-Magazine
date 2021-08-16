import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { SECRET } from '../configs/auth';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  const token = req.headers.authorization?.split(' ')[1];

  if (token) {
    const { role } = jwt.verify(token, SECRET) as JwtPayload;

    if (role !== 'admin') {
      res.status(401).json({
        success: false,
        message: 'You are not allowed to do that',
      });
    }
  }

  next();
};
