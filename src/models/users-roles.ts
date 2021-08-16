import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { UsersRolesI } from '../interfaces/users-roles';

const UsersRoles = database.define<UsersRolesI>('users_roles', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
});

export default UsersRoles;
