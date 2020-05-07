import Joi from 'joi';
import { cabs as URLS } from '../common/urls';
import { requestMethodType } from '../common/constants';
import { cabs } from '../logic';

const createCabsUserHandler = async (params) => cabs.createCabsUser(params);

const createCabsUserRoute = {
  method: requestMethodType.POST,
  url: URLS.CREATE_CABS,
  validation: Joi.object({
    cabNumber: Joi.string().required(),
    cabCurrentStatus: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    currentLocationLongitude: Joi.number().optional(),
    currentLocationLattitude: Joi.number().optional(),
  }),
  handler: createCabsUserHandler,
};

export default [
  createCabsUserRoute,
];
