import RoleRepository from '../repositories/role';
import BadRequestError from '../errors/bad-request-error';
import NotFoundError from '../errors/not-found-error';
import { RoleI } from '../interfaces/role';

const roleRepository = new RoleRepository();

class RoleService {
  async getRoles(): Promise<RoleI[]> {
    return await roleRepository.getAll();
  }

  async createRole(newRole: RoleI): Promise<RoleI> {
    const { roleName } = newRole;
    const role = await roleRepository.getRole({ roleName });

    if (role) {
      throw new BadRequestError('This role already exists');
    }

    return await roleRepository.create(newRole);
  }

  async updateRole(id: number, role: RoleI): Promise<RoleI | null> {
    const currentRole: RoleI | null = await roleRepository.getRole({ id });

    if (!currentRole) {
      throw new NotFoundError('Cannot find such role');
    }

    await roleRepository.update(id, role);

    return await roleRepository.getRole({ id });
  }

  async deleteRole(id: number): Promise<number> {
    const role: RoleI | null = await roleRepository.getRole({ id });

    if (!role) {
      throw new NotFoundError('Cannot find such role');
    }

    return await roleRepository.delete(id);
  }
}

export default RoleService;
