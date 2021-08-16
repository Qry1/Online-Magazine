import express from 'express';
import CategoryController from '../controllers/category';
import checkRequest from '../middlewares/checkRequest';
import { isAuthorized } from '../middlewares/is-authorized';
import { isAdmin } from '../middlewares/is-admin';
import validate from '../middlewares/validate';
import { validationSchemas } from '../validation-schemas';

const router = express.Router();
const categoryController = new CategoryController();

router.get('/', checkRequest(categoryController.getCategories));
router.put(
  '/:id',
  isAuthorized,
  isAdmin,
  validate({
    params: validationSchemas.params,
    body: validationSchemas.categoryCreateUpdate,
  }),
  checkRequest(categoryController.updateCategory),
);
router.post(
  '/',
  isAuthorized,
  isAdmin,
  validate({ body: validationSchemas.categoryCreateUpdate }),
  checkRequest(categoryController.createCategory),
);
router.delete(
  '/:id',
  isAuthorized,
  isAdmin,
  validate({ params: validationSchemas.params }),
  checkRequest(categoryController.deleteCategory),
);

export default router;
