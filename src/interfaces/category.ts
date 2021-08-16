import { ArticleI } from './article';
import {
  Optional,
  Model,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyGetAssociationsMixin,
} from 'sequelize';

export interface CategoryName {
  categoryName: string | string[];
}

export interface CategoryAttributes {
  id: number;
  categoryName: string | string[];
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export interface CategoryI
  extends Model<CategoryAttributes, CategoryCreationAttributes>,
    CategoryAttributes {
  getArticles: BelongsToManyGetAssociationsMixin<ArticleI>;
  removeArticles: BelongsToManyRemoveAssociationsMixin<ArticleI, 'id'>;
}
