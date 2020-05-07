import { uuid } from 'uuidv4';
import { Bookings } from '../models';

const createBooking = async (params) => {
  const generateUUID = uuid();
  const {
    bookingStartTime,
    bookingEndTime,
    bookingOwner,
    bookingCabId,
    bookingStatus,
    bookingFromLongitude,
    bookingFromLattitude,
    bookingToLongitude,
    bookingToLattitude,
  } = params;

  return Bookings.create({
    uuid: generateUUID,
    booking_start_time: bookingStartTime,
    booking_end_time: bookingEndTime,
    booking_owner: bookingOwner,
    booking_cab_id: bookingCabId,
    booking_status: bookingStatus,
    booking_from_longitude: bookingFromLongitude,
    booking_from_lattitude: bookingFromLattitude,
    booking_to_longitude: bookingToLongitude,
    booking_to_lattitude: bookingToLattitude,
  })
    .then(async () => ({
      status: true,
      message: 'Booking created successfully',
    }))
    .catch((error) => ({
      status: false,
      message: error.message,
    }));
};

const editBooking = async (params) => {
  const {
    bookingStartTime,
    bookingEndTime,
    bookingOwner,
    bookingCabId,
    bookingStatus,
    bookingFromLongitude,
    bookingFromLattitude,
    bookingToLongitude,
    bookingToLattitude,
  } = params;

  return Bookings.update({
    booking_start_time: bookingStartTime,
    booking_end_time: bookingEndTime,
    booking_owner: bookingOwner,
    booking_cab_id: bookingCabId,
    booking_status: bookingStatus,
    booking_from_longitude: bookingFromLongitude,
    booking_from_lattitude: bookingFromLattitude,
    booking_to_longitude: bookingToLongitude,
    booking_to_lattitude: bookingToLattitude,
  }, {
    where: {
      uuid: params.uuid,
    },
  })
    .then(async () => ({
      state: true,
      message: 'Cab User edited successfully',
    }))
    .catch((error) => ({
      status: false,
      message: error.message,
    }));
};

export default {
  createBooking,
  editBooking,
};
