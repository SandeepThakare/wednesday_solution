import { bookings, cabs } from '../data_interaction/internal/queries';

const createBooking = async (params) => {
  try {
    const { data } = await cabs.checkCabStatus(params.bookingCabId);

    if (data && data.cab_current_status === 'Active') {
      return bookings.createBooking(params);
    }

    return {
      status: false,
      error: 'Cab already booked !!!',
    };
  } catch (error) {
    return {
      status: false,
      error: error.message,
    };
  }
};

export default {
  createBooking,
};
