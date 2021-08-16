import { Response, Request } from 'express';
import UserService from '../services/user';
import { UserI } from '../interfaces/user';

const userService = new UserService();

class UserController {
  async getUsers(req: Request, res: Response) {
    const users: UserI[] = await userService.getUsers();

    res.json({
      success: true,
      data: users,
    });
  }

  async getUser(req: Request, res: Response) {
    const { id } = req.params;
    const user: UserI | null = await userService.getUser({ id });

    res.json({
      success: true,
      data: user,
    });
  }

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const updatedUser: UserI | null = await userService.updateUser(+id, req.body);

    res.json({
      success: true,
      data: updatedUser,
    });
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await userService.deleteUser(+id);

    res.json({
      success: true,
      message: 'User has been successfully removed',
    });
  }
}

export default UserController;
