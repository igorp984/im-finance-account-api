/* eslint-disable import/prefer-default-export */
import * as express from 'express';
import { login } from './controllers/auth';

const Router = express.Router();

Router.get('/', login);

export { Router };
