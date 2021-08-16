import { Optional, Model } from 'sequelize';

export interface UsersRolesAttributes {
  id: number;
}

interface UsersRolesCreationAttributes extends Optional<UsersRolesAttributes, 'id'> {}

export interface UsersRolesI
  extends Model<UsersRolesAttributes, UsersRolesCreationAttributes>,
    UsersRolesAttributes {}
