import { UserI } from './user';

export interface SearchParamsI {
  [key: string]: string | number;
}

export interface UserRoleI extends UserI {
  roleName: string;
}

export interface MailI {
  to: string;
  subject: string;
  html: string;
}
