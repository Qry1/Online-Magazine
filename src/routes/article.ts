import express from 'express';
import ArticleController from '../controllers/article';
import checkRequest from '../middlewares/checkRequest';
import validate from '../middlewares/validate';
import { validationSchemas } from '../validation-schemas';
import { isAuthorized } from '../middlewares/is-authorized';
import { isAdmin } from '../middlewares/is-admin';

const router = express.Router();
const articleController = new ArticleController();

router.get('/', checkRequest(articleController.getArticles));
router.get(
  '/:id',
  validate({ params: validationSchemas.params }),
  checkRequest(articleController.getArticle),
);
router.post(
  '/',
  isAuthorized,
  isAdmin,
  validate({ body: validationSchemas.articleCreate }),
  checkRequest(articleController.createArticle),
);
router.put(
  '/:id',
  isAuthorized,
  isAdmin,
  validate({ params: validationSchemas.params, body: validationSchemas.articleUpdate }),
  checkRequest(articleController.updateArticle),
);
router.delete(
  '/:id',
  isAuthorized,
  isAdmin,
  validate({ params: validationSchemas.params }),
  checkRequest(articleController.deleteArticle),
);

export default router;
