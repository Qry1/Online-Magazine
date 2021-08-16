import { Response, Request } from 'express';
import RoleService from '../services/role';
import { RoleI } from '../interfaces/role';

const roleService = new RoleService();

class RoleController {
  async getRoles(req: Request, res: Response) {
    const roles: RoleI[] = await roleService.getRoles();

    res.json({
      success: true,
      data: roles,
    });
  }

  async createRole(req: Request, res: Response) {
    const createdRole: RoleI | null = await roleService.createRole(req.body);

    res.status(201).json({
      success: true,
      data: createdRole,
    });
  }

  async updateRole(req: Request, res: Response) {
    const { id } = req.params;

    const updatedRole: RoleI | null = await roleService.updateRole(+id, req.body);

    res.json({
      success: true,
      data: updatedRole,
    });
  }

  async deleteRole(req: Request, res: Response) {
    const { id } = req.params;
    await roleService.deleteRole(+id);

    res.json({
      success: true,
      message: 'Role has been successfully removed',
    });
  }
}

export default RoleController;
