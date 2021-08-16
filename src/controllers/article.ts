import { Response, Request } from 'express';
import ArticleService from '../services/article';
import { ArticleI } from '../interfaces/article';

const articleService = new ArticleService();

class ArticleController {
  async getArticles(req: Request, res: Response) {
    const options = req.query;
    const articles: ArticleI[] = await articleService.getArticles(options);

    res.json({
      success: true,
      data: articles,
    });
  }

  async getArticle(req: Request, res: Response) {
    const { id } = req.params;

    const article: ArticleI = await articleService.getArticle(+id);

    res.json({
      success: true,
      data: article,
    });
  }

  async createArticle(req: Request, res: Response) {
    const createdArticle: ArticleI | null = await articleService.createArticle(req.body);

    res.status(201).json({
      success: true,
      data: createdArticle,
    });
  }

  async updateArticle(req: Request, res: Response) {
    const { id } = req.params;

    const updatedArticle: ArticleI | null = await articleService.updateArticle(+id, {
      ...req.body,
      updatedAt: new Date(),
    });

    res.json({
      success: true,
      data: updatedArticle,
    });
  }

  async deleteArticle(req: Request, res: Response) {
    const { id } = req.params;
    await articleService.deleteArticle(+id);

    res.json({
      success: true,
      message: 'Article has been successfully removed',
    });
  }
}

export default ArticleController;
