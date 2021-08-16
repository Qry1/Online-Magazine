import jwt from 'jsonwebtoken';
import { SECRET } from '../configs/auth';

export const generateToken = (id: number, role: string, name: string) => {
  return jwt.sign({ id, role, name }, SECRET, { expiresIn: '24h' });
};
