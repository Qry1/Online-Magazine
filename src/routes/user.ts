import express from 'express';
import UserController from '../controllers/user';
import checkRequest from '../middlewares/checkRequest';
import validate from '../middlewares/validate';
import { validationSchemas } from '../validation-schemas';
import { isAuthorized } from '../middlewares/is-authorized';

const router = express.Router();
const userController = new UserController();

router.get('/', isAuthorized, checkRequest(userController.getUsers));
router.get(
  '/:id',
  validate({ params: validationSchemas.params }),
  checkRequest(userController.getUser),
);
router.put(
  '/:id',
  isAuthorized,
  validate({ params: validationSchemas.params, body: validationSchemas.userUpdate }),
  checkRequest(userController.updateUser),
);
router.delete(
  '/:id',
  isAuthorized,
  validate({ params: validationSchemas.params }),
  checkRequest(userController.deleteUser),
);

export default router;
