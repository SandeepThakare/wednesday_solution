import Joi from 'joi';
import { user as URLS } from '../common/urls';
import { requestMethodType } from '../common/constants';
import { users } from '../logic';

const createUserHandler = async (params) => users.createUser(params);

const createUserRoute = {
  method: requestMethodType.POST,
  url: URLS.CREATE_USER,
  validation: Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().optional(),
    city: Joi.string().optional(),
    state: Joi.string().optional(),
    country: Joi.string().optional(),
    mobile: Joi.string().required(),
    email: Joi.string().required(),
  }),
  handler: createUserHandler,
};

export default [
  createUserRoute,
];
