import express from 'express';
import checkRequest from '../middlewares/checkRequest';
import AuthController from '../controllers/auth';
import validate from '../middlewares/validate';
import { validationSchemas } from '../validation-schemas';

const router = express.Router();
const authController = new AuthController();

router.post(
  '/registration',
  validate({ body: validationSchemas.authRegistration }),
  checkRequest(authController.register),
);
router.post(
  '/login',
  validate({ body: validationSchemas.authLogin }),
  checkRequest(authController.login),
);

export default router;
