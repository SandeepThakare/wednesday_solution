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

const confirmBooking = async (params) => {
  try {
    const result = await bookings.confirmBooking(params);
    const cabResult = await cabs.updateCabStatus({ cabId: result.data.bookingCabId, status: 'Booked' });

    return result;
  } catch (error) {
    return {
      status: false,
      error: error.message,
    };
  }
};

const endBooking = async (params) => {
  try {
    const result = await bookings.endBooking(params);
    const cabResult = await cabs.updateCabStatus({ cabId: result.data.bookingCabId, status: 'Active' });

    return result;

  } catch (error) {
    return {
      status: false,
      error: error.message,
    };
  }
};

const fetchBookings = async (params) => {
  try {
    return bookings.fetchAllBookings(params);
  } catch (error) {
    return {
      status: false,
      error: error.message,
    };
  }
};

export default {
  createBooking,
  confirmBooking,
  endBooking,
  fetchBookings,
};
