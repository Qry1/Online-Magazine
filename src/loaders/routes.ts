import { Express } from 'express';
import articleRouter from '../routes/article';
import userRouter from '../routes/user';
import authRouter from '../routes/auth';
import categoryRouter from '../routes/category';
import roleRouter from '../routes/role';
import commentRouter from '../routes/comment';

export default (app: Express) => {
  app.use('/articles', articleRouter);
  app.use('/users', userRouter);
  app.use('/auth', authRouter);
  app.use('/categories', categoryRouter);
  app.use('/roles', roleRouter);
  app.use('/comments', commentRouter);
};
