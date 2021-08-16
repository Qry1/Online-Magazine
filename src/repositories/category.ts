import { Op } from 'sequelize';
import Category from '../models/category';
import { CategoryI, CategoryName } from '../interfaces/category';

class CategoryRepository {
  getAll(): Promise<CategoryI[]> {
    return Category.findAll();
  }

  getAllByIds(ids: number[]): Promise<CategoryI[]> {
    return Category.findAll({
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
  }

  get(id: number): Promise<CategoryI | null> {
    return Category.findByPk(id);
  }

  create(category: CategoryI): Promise<CategoryI[] | CategoryI> {
    const { categoryName } = category as CategoryName;

    if (Array.isArray(categoryName)) {
      const categoryNames: CategoryName[] = categoryName.map((categoryName) => ({
        categoryName,
      }));

      return Category.bulkCreate(categoryNames, { returning: true });
    }

    return Category.create({ categoryName });
  }

  update(id: number, category: CategoryI): Promise<[number, CategoryI[]]> {
    return Category.update(category, {
      where: {
        id,
      },
    });
  }

  delete(id: number): Promise<number> {
    return Category.destroy({
      where: {
        id,
      },
    });
  }
}

export default CategoryRepository;
