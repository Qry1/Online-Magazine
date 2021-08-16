import { RoleI } from './role';
import { ArticleI } from './article';
import {
  Optional,
  Model,
  BelongsToManyAddAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToGetAssociationMixin,
  BelongsToManyRemoveAssociationMixin,
} from 'sequelize';

interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class UserI extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public createdAt!: Date;

  public getRole!: BelongsToGetAssociationMixin<RoleI>;
  public addRole!: BelongsToManyAddAssociationMixin<RoleI, 'id'>;
  public removeRole!: BelongsToManyRemoveAssociationsMixin<RoleI, 'id'>;
  public addArticle!: BelongsToManyAddAssociationMixin<ArticleI, 'id'>;
  public getComment!: BelongsToGetAssociationMixin<ArticleI>;
  public removeArticle!: BelongsToManyRemoveAssociationMixin<ArticleI, 'id'>;
}
