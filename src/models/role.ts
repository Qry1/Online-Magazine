import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { RoleI } from '../interfaces/role';

const Role = database.define<RoleI>('roles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  roleName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'role_name',
  },
});

export default Role;
