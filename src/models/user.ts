import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { UserI } from '../interfaces/user';

const User = database.define<UserI>('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'first_name',
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    field: 'last_name',
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: new Date(),
  },
});

export default User;
