import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { ArticleI } from '../interfaces/article';

const Article = database.define<ArticleI>('articles', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    type: Sequelize.INTEGER,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: new Date(),
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    field: 'updated_at',
    defaultValue: new Date(),
  },
});

export default Article;
