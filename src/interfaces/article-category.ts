import { Optional, Model } from 'sequelize';

export interface ArticlesCategoriesAttributes {
  id: number;
}

interface ArticlesCategoriesCreationAttributes
  extends Optional<ArticlesCategoriesAttributes, 'id'> {}

export interface ArticlesCategoriesI
  extends Model<ArticlesCategoriesAttributes, ArticlesCategoriesCreationAttributes>,
    ArticlesCategoriesAttributes {}
