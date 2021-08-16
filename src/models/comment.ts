import Sequelize from 'sequelize';
import { database } from '../configs/database';
import { CommentI } from '../interfaces/comment';

const Comment = database.define<CommentI>('comments', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    type: Sequelize.INTEGER,
  },
  text: {
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

export default Comment;
