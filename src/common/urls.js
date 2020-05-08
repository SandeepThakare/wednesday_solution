const USER_BASE = '/user';
export const user = {
  CREATE_USER: `${USER_BASE}/create`,
  EDIT_USER: `${USER_BASE}/edit`,
};

const AUTH_BASE = '/auth';
export const auth = {
  LOGIN_USER: `${AUTH_BASE}/login`,
};

const BOOKINGS_BASE = '/bookings';
export const bookings = {
  CREATE_BOOKINGS: `${BOOKINGS_BASE}/create`,
  EDIT_BOOKINGS: `${BOOKINGS_BASE}/edit`,
  FETCH_BOOKINGS: `${BOOKINGS_BASE}/list`,
  FETCH_USER_BOOKINGS: `${BOOKINGS_BASE}/fetchUserBookings`,
  CONFIRM_BOOKING: `${BOOKINGS_BASE}/confirmBooking`,
  END_BOOKING: `${BOOKINGS_BASE}/endBooking`,
  START_RIDE: `${BOOKINGS_BASE}/startRide`,
};

const CABS_BASE = '/cabs';
export const cabs = {
  CREATE_CABS: `${CABS_BASE}/create`,
  EDIT_CABS: `${CABS_BASE}/edit`,
  FETCH_CABS: `${CABS_BASE}/list`,
  FETCH_AVAILABLE_CABS: `${CABS_BASE}/fetchAvailableCabs`,
};
