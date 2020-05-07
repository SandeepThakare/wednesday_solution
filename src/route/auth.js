import Joi from 'joi';
import { auth as URLS } from '../common/urls';
import { requestMethodType } from '../common/constants';
import { auth } from '../logic';

const loginRouteHandler = async (params) => auth.UserLoginHandler({ body: params });

const loginRoute = {
  method: requestMethodType.POST,
  url: URLS.LOGIN_USER,
  validation: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
  handler: loginRouteHandler,
};

export default [
  loginRoute,
];
