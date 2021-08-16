import { database } from './configs/database';
import { server } from './configs/server';
import initServer from './server';
import initModels from './models';

async function startServer() {
  try {
    initModels();
    await database.sync();
    initServer();
  } catch (error) {
    console.error(error);
  }
}

startServer().then(() =>
  console.log(`Server has been started at http://${server.hostname}:${server.port}`),
);
