import { Express } from 'express';
import commonLoader from './common';
import routeLoader from './routes';
import errorLoader from './errors';

export default (app: Express) => {
  commonLoader(app);
  routeLoader(app);
  errorLoader(app);
};
