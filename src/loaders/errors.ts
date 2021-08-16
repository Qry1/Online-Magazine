import { Express } from 'express';
import { errorhandler } from '../middlewares/error-handler';

export default (app: Express) => {
  app.use(errorhandler);
};
