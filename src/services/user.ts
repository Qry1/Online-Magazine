import UserRepository from '../repositories/user';
import RoleRepository from '../repositories/role';
import NotFoundError from '../errors/not-found-error';
import { UserI } from '../interfaces/user';
import { SearchParamsI } from '../interfaces/common';
import { RoleI } from '../interfaces/role';

const userRepository = new UserRepository();
const roleRepository = new RoleRepository();

class UserService {
  async getUsers(): Promise<UserI[]> {
    return await userRepository.getAll();
  }

  async getUser(data: SearchParamsI): Promise<UserI | null> {
    const user = await userRepository.get(data);

    if (!user) {
      throw new NotFoundError('Cannot find such user');
    }

    return user;
  }

  async checkUser(data: SearchParamsI): Promise<UserI | null> {
    return await userRepository.check(data);
  }

  async createUser(newUser: UserI): Promise<UserI | null> {
    const user = await userRepository.create(newUser);

    const role: RoleI | null = await roleRepository.getRole({ roleName: 'client' });

    if (role) {
      await user.addRole(role);
    }

    return await userRepository.get({ id: user.id });
  }

  async updateUser(id: number, user: UserI): Promise<UserI | null> {
    const currentUser: UserI | null = await userRepository.get({ id });

    if (!currentUser) {
      throw new NotFoundError('Cannot find such user');
    }

    await userRepository.update(id, user);

    return await userRepository.get({ id });
  }

  async deleteUser(id: number): Promise<number> {
    const user: UserI | null = await userRepository.get({ id });

    if (!user) {
      throw new NotFoundError('Cannot find such user');
    }

    const deletingRole = await user.getRole();
    await user.removeRole([deletingRole]);

    return await userRepository.delete(id);
  }
}

export default UserService;
