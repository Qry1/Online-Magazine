import { authLogin } from './auth/auth-login';
import { authRegistration } from './auth/auth-registration';
import { userUpdate } from './user/user-update';
import { articleCreate } from './article/article-create';
import { articleUpdate } from './article/article-update';
import { categoryCreateUpdate } from './category/categoryCreateUpdate';
import { commentCreate } from './comment/commentCreate';
import { params } from './params';

export const validationSchemas = {
  authLogin,
  authRegistration,
  userUpdate,
  articleCreate,
  articleUpdate,
  categoryCreateUpdate,
  commentCreate,
  params,
};
