import express from 'express';
import checkRequest from '../middlewares/checkRequest';
import CommentController from '../controllers/comment';
import { isAuthorized } from '../middlewares/is-authorized';
import validate from '../middlewares/validate';
import { validationSchemas } from '../validation-schemas';

const router = express();
const commentController = new CommentController();

router.get('/:articleId', checkRequest(commentController.getArticleComments));
router.post(
  '/:articleId',
  isAuthorized,
  validate({ body: validationSchemas.commentCreate }),
  checkRequest(commentController.addArticleComment),
);
router.delete('/:productId', isAuthorized, checkRequest(commentController.removeArticleComment));

export default router;
