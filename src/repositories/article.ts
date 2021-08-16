import { Op } from 'sequelize';
import Article from '../models/article';
import Category from '../models/category';
import { ArticleI } from '../interfaces/article';
import { SearchParamsI } from '../interfaces/common';

class ArticleRepository {
  getAll(searchTitle?: string, searchDesc?: string): Promise<ArticleI[]> {
    return Article.findAll({
      include: [
        {
          model: Category,
          attributes: ['id', 'categoryName'],
          through: {
            attributes: [],
          },
        },
      ],
      where: {
        title: {
          [Op.like]: `%${searchTitle || ''}%`,
        },
        description: {
          [Op.like]: `%${searchDesc || ''}%`,
        },
      },
      order: [['title', 'ASC']],
    });
  }

  get(searchParam: SearchParamsI): Promise<ArticleI | null> {
    return Article.findOne({
      include: [
        {
          model: Category,
          attributes: ['id', 'categoryName'],
          through: {
            attributes: [],
          },
        },
      ],
      where: searchParam,
    });
  }

  create(article: ArticleI): Promise<ArticleI> {
    return Article.create(article);
  }

  update(id: number, article: ArticleI): Promise<[number, ArticleI[]]> {
    return Article.update(article, {
      where: {
        id,
      },
    });
  }

  delete(id: number): Promise<number> {
    return Article.destroy({
      where: {
        id,
      },
    });
  }
}

export default ArticleRepository;
