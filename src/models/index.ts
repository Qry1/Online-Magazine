import Article from './article';
import Category from './category';
import ArticlesCategories from './articles-categories';
import User from './user';
import Role from './role';
import Comment from './comment';
import UsersRoles from './users-roles';

export default () => {
  Article.belongsToMany(Category, {
    through: ArticlesCategories,
    foreignKey: 'article_id',
  });
  Category.belongsToMany(Article, {
    through: ArticlesCategories,
    foreignKey: 'category_id',
  });
  User.belongsToMany(Role, {
    through: UsersRoles,
    foreignKey: 'user_id',
  });
  Role.belongsToMany(User, {
    through: UsersRoles,
    foreignKey: 'role_id',
  });
  User.belongsToMany(Article, {
    foreignKey: 'user_id',
    through: Comment,
  });
  Article.belongsToMany(User, {
    foreignKey: 'article_id',
    through: Comment,
  });
  Comment.belongsTo(Article, {
    foreignKey: 'article_id',
  });
  Article.hasMany(Comment, {
    foreignKey: 'article_id',
    onDelete: 'cascade',
  });
};
