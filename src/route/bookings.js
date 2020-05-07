import Joi from 'joi';
import { bookings as URLS } from '../common/urls';
import { requestMethodType } from '../common/constants';
import { bookings } from '../logic';

const createBookingHandler = async (params) => bookings.createBooking(params);

const createBookingRoute = {
  method: requestMethodType.POST,
  url: URLS.CREATE_BOOKINGS,
  validation: Joi.object({
    bookingStartTime: Joi.string().optional(),
    bookingEndTime: Joi.string().optional(),
    bookingOwner: Joi.string().guid({ version: 'uuidv4' }).required(),
    bookingCabId: Joi.string().guid({ version: 'uuidv4' }).required(),
    bookingStatus: Joi.string().optional(),
    bookingFromLongitude: Joi.number().required(),
    bookingFromLattitude: Joi.number().required(),
    bookingToLongitude: Joi.number().required(),
    bookingToLattitude: Joi.number().required(),
  }),
  handler: createBookingHandler,
};

export default [
  createBookingRoute,
];
