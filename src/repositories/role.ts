import Role from '../models/role';
import { RoleI } from '../interfaces/role';
import { SearchParamsI } from '../interfaces/common';

class RoleRepository {
  getAll(): Promise<RoleI[]> {
    return Role.findAll();
  }

  getRole(data: SearchParamsI): Promise<RoleI | null> {
    return Role.findOne({
      where: data,
    });
  }

  create(role: RoleI): Promise<RoleI> {
    return Role.create(role);
  }

  update(id: number, role: RoleI): Promise<[number, RoleI[]]> {
    return Role.update(role, {
      where: {
        id,
      },
    });
  }

  delete(id: number): Promise<number> {
    return Role.destroy({
      where: {
        id,
      },
    });
  }
}

export default RoleRepository;
