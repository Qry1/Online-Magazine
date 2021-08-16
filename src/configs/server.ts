const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

export const server = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT,
};
