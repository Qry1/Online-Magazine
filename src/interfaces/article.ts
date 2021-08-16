import {
  Optional,
  Model,
  BelongsToManySetAssociationsMixin,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyRemoveAssociationsMixin,
} from 'sequelize';
import { CategoryI } from './category';

interface ArticleAttributes {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  categories?: number[];
}

interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'id'> {}

export interface ArticleI
  extends Model<ArticleAttributes, ArticleCreationAttributes>,
    ArticleAttributes {
  setCategories: BelongsToManySetAssociationsMixin<CategoryI, 'id'>;
  getCategories: BelongsToManyGetAssociationsMixin<CategoryI>;
  removeCategories: BelongsToManyRemoveAssociationsMixin<CategoryI, 'id'>;
  getComments: BelongsToManyGetAssociationsMixin<ArticleI>;
}
