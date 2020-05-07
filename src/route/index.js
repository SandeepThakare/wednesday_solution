import express from 'express';
import { createValidator } from 'express-joi-validation';
import { requestParamsType } from '../common/constants';

// import doctor from './doctor';

const router = express.Router();
const validator = createValidator();
const routeHandlers = [
  // ...doctor,
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
