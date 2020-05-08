import { uuid } from 'uuidv4';
import camelcaseKeys from 'camelcase-keys';
import { Bookings, Cabs, Sequelize } from '../models';

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

const confirmBooking = async ({ bookingId }) => Bookings.update({
  booking_status: 'Confirmed',
}, {
  where: {
    uuid: bookingId,
  },
  returning: true,
  plain: true,
})
  .then(async () => {
    const response = await Bookings.findOne({ raw: true, where: { uuid: bookingId } });
    return {
      state: true,
      message: 'Booking Confirmed !!!',
      data: camelcaseKeys(response),
    };
  })
  .catch((error) => ({
    status: false,
    message: error.message,
  }));

const startRide = async ({ bookingId, bookingStartTime }) => Bookings.update({
  booking_status: 'Started',
  booking_start_time: bookingStartTime,
}, {
  where: {
    uuid: bookingId,
  },
  returning: true,
  plain: true,
})
  .then(async () => {
    const response = await Bookings.findOne({ raw: true, where: { uuid: bookingId } });
    return {
      state: true,
      message: 'Booking Confirmed !!!',
      data: camelcaseKeys(response),
    };
  })
  .catch((error) => ({
    status: false,
    message: error.message,
  }));

const endBooking = async ({ bookingId, bookingEndTime }) => Bookings.update({
  booking_status: 'Completed',
  booking_end_time: bookingEndTime,
}, {
  where: {
    uuid: bookingId,
  },
  returning: true,
  plain: true,
})
  .then(async () => {
    const response = await Bookings.findOne({ raw: true, where: { uuid: bookingId } });
    return {
      state: true,
      message: 'Booking Completed !!!',
      data: camelcaseKeys(response),
    };
  })
  .catch((error) => ({
    status: false,
    message: error.message,
  }));

const fetchAllBookings = async ({ userId, limit, skip }) => Bookings.findAll({
  raw: true,
  attributes: [
    'uuid',
    'booking_start_time',
    'booking_end_time',
    'rating',
    'booking_from_longitude',
    'booking_from_lattitude',
    'booking_to_longitude',
    'booking_to_lattitude',
    [Sequelize.col('Cab.cab_number'), 'cabNumber'],
    [Sequelize.col('Cab.first_name'), 'cabDriverFirstName'],
    [Sequelize.col('Cab.last_name'), 'cabDriverLastName'],
  ],
  include: [
    {
      attributes: [],
      model: Cabs,
    },
  ],
  where: {
    booking_owner: userId,
    booking_status: 'Completed',
  },
  limit: limit || 10,
  offset: skip || 0,
})
  .then(async (response) => ({
    state: true,
    message: 'Fetch Data Successfully !!!',
    data: camelcaseKeys(response),
  }))
  .catch((error) => ({
    status: false,
    message: error.message,
  }));

export default {
  createBooking,
  editBooking,
  confirmBooking,
  endBooking,
  fetchAllBookings,
  startRide,
};
