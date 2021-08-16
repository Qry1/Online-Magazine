import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { CategoryI } from '../interfaces/category';

const Category = database.define<CategoryI>('categories', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  categoryName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    field: 'category_name',
  },
});

export default Category;
