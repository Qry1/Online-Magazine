import CategoryRepository from '../repositories/category';
import NotFoundError from '../errors/not-found-error';
import { CategoryI } from '../interfaces/category';

const categoryRepository = new CategoryRepository();

class CategoryService {
  async getCategories(): Promise<CategoryI[]> {
    return await categoryRepository.getAll();
  }

  async createCategory(newCategory: CategoryI): Promise<CategoryI[] | CategoryI> {
    return await categoryRepository.create(newCategory);
  }

  async updateCategory(id: number, category: CategoryI): Promise<CategoryI | null> {
    const currentCategory: CategoryI | null = await categoryRepository.get(id);

    if (!currentCategory) {
      throw new NotFoundError('Cannot find such category');
    }

    await categoryRepository.update(id, category);

    return await categoryRepository.get(id);
  }

  async deleteCategory(id: number): Promise<number> {
    const category: CategoryI | null = await categoryRepository.get(id);

    if (!category) {
      throw new NotFoundError('Cannot find such category');
    }

    const deletingArticles = await category.getArticles();
    await category.removeArticles(deletingArticles);

    return await categoryRepository.delete(id);
  }
}

export default CategoryService;
