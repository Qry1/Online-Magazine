import express from 'express';
import RoleController from '../controllers/role';
import checkRequest from '../middlewares/checkRequest';
import { isAuthorized } from '../middlewares/is-authorized';
import { isAdmin } from '../middlewares/is-admin';
import validate from '../middlewares/validate';
import { validationSchemas } from '../validation-schemas';

const router = express.Router();
const roleController = new RoleController();

router.get('/', isAuthorized, checkRequest(roleController.getRoles));
router.put(
  '/:id',
  isAuthorized,
  isAdmin,
  validate({ params: validationSchemas.params, body: validationSchemas.categoryCreateUpdate }),
  checkRequest(roleController.updateRole),
);
router.post(
  '/',
  isAuthorized,
  isAdmin,
  validate({ body: validationSchemas.categoryCreateUpdate }),
  checkRequest(roleController.createRole),
);
router.delete(
  '/:id',
  isAuthorized,
  isAdmin,
  validate({ params: validationSchemas.params }),
  checkRequest(roleController.deleteRole),
);

export default router;
