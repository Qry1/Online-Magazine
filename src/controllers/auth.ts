import { Request, Response } from 'express';
import UserService from '../services/user';
import NotFoundError from '../errors/not-found-error';
import BadRequestError from '../errors/bad-request-error';
import { generateToken } from '../helpers/generateToken';
import { registrationMailSender } from '../configs/mailer';
import { hashPassword, isPasswordValid } from '../helpers/hashPassword';
import { UserRoleI } from '../interfaces/common';
import { UserI } from '../interfaces/user';

const userService = new UserService();

class AuthController {
  async register(req: Request, res: Response) {
    const { email, firstName, lastName, password } = req.body;
    const user = await userService.checkUser({ email });

    if (user) {
      throw new BadRequestError('User already exists');
    }

    const createdUser: UserI | null = await userService.createUser({
      ...req.body,
      password: hashPassword(password),
    });

    if (createdUser) {
      const { email, firstName, lastName } = createdUser;

      registrationMailSender(email, firstName, lastName);
    }

    res.status(201).json({
      success: true,
      data: createdUser,
      message: `User ${firstName} ${lastName} has successfully registered`,
    });
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await userService.checkUser({ email });

    if (!user) {
      throw new NotFoundError('Cannot find user with such email');
    } else {
      const { firstName, lastName, id, password: userPassword, roleName } = user as UserRoleI;

      if (!isPasswordValid(password, userPassword)) {
        throw new BadRequestError('Email or password is wrong');
      }

      const token = generateToken(id, roleName, lastName);

      res.status(200).json({
        success: true,
        message: `User ${firstName} ${lastName} has successfully logged in`,
        token,
      });
    }
  }
}

export default AuthController;
