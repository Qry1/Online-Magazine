import ArticleRepository from '../repositories/article';
import CategoryRepository from '../repositories/category';
import NotFoundError from '../errors/not-found-error';
import { ArticleI } from '../interfaces/article';
import { CategoryI } from '../interfaces/category';

const articleRepository = new ArticleRepository();
const categoryRepository = new CategoryRepository();

class ArticleService {
  async getArticles(options: any): Promise<ArticleI[]> {
    console.log(options);
    const { title, description } = options;
    return await articleRepository.getAll(title, description);
  }

  async getArticle(id: number): Promise<ArticleI> {
    const article: ArticleI | null = await articleRepository.get({ id });

    if (!article) {
      throw new NotFoundError('Cannot find such article');
    }

    return article;
  }

  async createArticle(article: ArticleI): Promise<ArticleI | null> {
    const createdArticle = await articleRepository.create(article);
    const { id } = createdArticle;

    if (article.categories) {
      const categories: CategoryI[] = await categoryRepository.getAllByIds(article.categories);
      await createdArticle.setCategories(categories);
    }

    return await articleRepository.get({ id });
  }

  async updateArticle(id: number, article: ArticleI): Promise<ArticleI | null> {
    const currentArticle: ArticleI | null = await articleRepository.get({ id });

    if (!currentArticle) {
      throw new NotFoundError('Cannot find such article');
    }

    if (article.categories) {
      const categories = await categoryRepository.getAllByIds(article.categories);

      await currentArticle.setCategories(categories);
    }

    await articleRepository.update(id, article);

    return await articleRepository.get({ id });
  }

  async deleteArticle(id: number): Promise<number> {
    const article: ArticleI | null = await articleRepository.get({ id });

    if (!article) {
      throw new NotFoundError('Cannot find such article');
    }

    return await articleRepository.delete(id);
  }
}

export default ArticleService;
