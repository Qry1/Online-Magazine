import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { ArticlesCategoriesI } from '../interfaces/article-category';

const ArticlesCategories = database.define<ArticlesCategoriesI>('article_categories', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
});

export default ArticlesCategories;
