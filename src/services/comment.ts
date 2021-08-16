import ArticleRepository from '../repositories/article';
import UserRepository from '../repositories/user';
import NotFoundError from '../errors/not-found-error';
import { Sequelize } from 'sequelize';
import { UserI } from '../interfaces/user';

const userRepository = new UserRepository();
const articleRepository = new ArticleRepository();

class CommentService {
  async getArticleComments(articleId: number) {
    const article = await articleRepository.get({ id: articleId });

    if (!article) {
      throw new NotFoundError('Cannot find such article');
    }

    return await article.getComments({
      subQuery: true,
      attributes: [[Sequelize.col('comments.text'), 'comments']],
    });
  }

  async addArticleComment(articleId: number, userId: number, text: string) {
    const user: UserI | null = await userRepository.get({ id: userId });
    const article = await articleRepository.get({ id: articleId });

    if (!user) {
      throw new NotFoundError('Cannot find such user');
    }

    if (!article) {
      throw new NotFoundError('Cannot find such article');
    }

    return await user.addArticle(article, { through: { text } });
  }

  async removeArticleComment(articleId: number, userId: number, commentId: number) {
    const user: UserI | null = await userRepository.get({ id: userId });
    const article = await articleRepository.get({ id: articleId });

    if (!user) {
      throw new NotFoundError('Cannot find such user');
    }

    if (!article) {
      throw new NotFoundError('Cannot find such article');
    }

    return await user.removeArticle(await user.getComment({ where: { id: commentId } }));
  }
}

export default CommentService;
