import { Optional, Model } from 'sequelize';

export interface RoleAttributes {
  id: number;
  roleName: string;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

export interface RoleI extends Model<RoleAttributes, RoleCreationAttributes>, RoleAttributes {}
