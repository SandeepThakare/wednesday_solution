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

const confirmBookingHandler = async (params) => bookings.confirmBooking(params);

const confirmBookingRoute = {
  method: requestMethodType.POST,
  url: URLS.CONFIRM_BOOKING,
  validation: Joi.object({
    bookingId: Joi.string().guid({ version: 'uuidv4' }).required(),
    bookingStartTime: Joi.string().required(),
  }),
  handler: confirmBookingHandler,
};

const endBookingHandler = async (params) => bookings.endBooking(params);

const endBookingRoute = {
  method: requestMethodType.POST,
  url: URLS.END_BOOKING,
  validation: Joi.object({
    bookingId: Joi.string().guid({ version: 'uuidv4' }).required(),
    bookingEndTime: Joi.string().required(),
  }),
  handler: endBookingHandler,
};

const fetchBookingHandler = async (params) => bookings.fetchBookings(params);

const fetchBookingRoute = {
  method: requestMethodType.POST,
  url: URLS.FETCH_BOOKINGS,
  validation: Joi.object({
    userId: Joi.string().guid({ version: 'uuidv4' }).required(),
  }),
  handler: fetchBookingHandler,
};


export default [
  createBookingRoute,
  confirmBookingRoute,
  endBookingRoute,
  fetchBookingRoute,
];
