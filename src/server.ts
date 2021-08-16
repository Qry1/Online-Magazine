import express from 'express';
import initLoaders from './loaders';
import { server } from './configs/server';

const app = express();

export default () => {
  initLoaders(app);
  app.listen(server.port);
};
