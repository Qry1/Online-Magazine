import bcrypt from 'bcryptjs';
import { SALT } from '../configs/auth';

export const hashPassword = (password: string): string => {
  return bcrypt.hashSync(password, SALT);
};

export const isPasswordValid = (password: string, hashedPassword: string): boolean => {
  return bcrypt.compareSync(password, hashedPassword);
};
