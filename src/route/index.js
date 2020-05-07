import express from 'express';
import { createValidator } from 'express-joi-validation';
import { requestParamsType } from '../common/constants';

import users from './users';
import auth from './auth';
import cabs from './cabs';
import bookings from './bookings';

const router = express.Router();
const validator = createValidator();
const routeHandlers = [
  ...users,
  ...auth,
  ...cabs,
  ...bookings,
];

routeHandlers.forEach((item) => {
  router[item.method](
    item.url,
    validator[requestParamsType[item.method]](item.validation),
    async (req, res) => {
      res.send(await item.handler(req.body));
    },
  );
});

export default router;
