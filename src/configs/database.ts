import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME || 'iShop';
const USER_NAME = process.env.USER_NAME || 'root';
const USER_PASSWORD = process.env.USER_PASSWORD || '12345678';
const DB_HOSTNAME = process.env.DB_HOSTNAME || 'localhost';
const DB_DIALECT = 'mysql';

export const database = new Sequelize(DB_NAME, USER_NAME, USER_PASSWORD, {
  host: DB_HOSTNAME,
  dialect: DB_DIALECT,
  define: {
    timestamps: false,
  },
});
