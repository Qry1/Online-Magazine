import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';

export default (app: Express) => {
  app
    .use(cors())
    .use(express.json())
    .use(morgan('tiny'))
    .use(express.urlencoded({ extended: false }));
};
