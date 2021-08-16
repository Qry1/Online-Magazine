import { Optional, Model } from 'sequelize';

interface CommentAttributes {
  id: number;
  text: string;
  createdAt: Date;
}

interface CommentCreationAttributes extends Optional<CommentAttributes, 'id'> {}

export interface CommentI
  extends Model<CommentAttributes, CommentCreationAttributes>,
    CommentAttributes {}
