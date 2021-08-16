import { Response, Request } from 'express';
import CategoryService from '../services/category';
import { CategoryI } from '../interfaces/category';

const categoryService = new CategoryService();

class CategoryController {
  async getCategories(req: Request, res: Response) {
    const categories: CategoryI[] = await categoryService.getCategories();

    res.json({
      success: true,
      data: categories,
    });
  }

  async createCategory(req: Request, res: Response) {
    const category: CategoryI[] | CategoryI = await categoryService.createCategory(req.body);

    res.json({
      success: true,
      data: category,
    });
  }

  async updateCategory(req: Request, res: Response) {
    const { id } = req.params;
    const updatedCategory: CategoryI | null = await categoryService.updateCategory(+id, req.body);
    console.log('CONTROLLER');
    res.json({
      success: true,
      data: updatedCategory,
    });
  }

  async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    await categoryService.deleteCategory(+id);

    console.log(id);

    res.json({
      success: true,
      message: 'Category has been successfully removed',
    });
  }
}

export default CategoryController;
