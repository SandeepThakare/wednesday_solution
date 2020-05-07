/**
 * This module contains the response codes that the application sends to the client
 * @author sandeep thakare
 * @since Saturday, April 20, 2020 6:43 PM
 */
const MISSING_REQUIRED_PROPS = { code: 102, message: 'Missing required props.' };
const SUCCESS = { code: 100, message: 'success' };
const SUCCESS_MESSAGE = ({
  message,
  data,
}) => ({ code: 100, message, data });
const SUCCESS_DATA = (data) => ({ code: 100, message: 'success', data });
const SUCCESS_PAGINATION = (data, page, limit) => ({
  code: 100, message: 'success', data, page, limit, length: data.length,
});
const DATABASE_ERROR = (error) => ({ code: 103, message: 'Database error.', error });
const ERROR = ({ error, message = 'error' }) => ({ code: 104, message, error });
const USER_NOT_FOUND = { code: 104, message: 'Requested user not found' };

export default {
  MISSING_REQUIRED_PROPS,
  SUCCESS,
  SUCCESS_MESSAGE,
  SUCCESS_DATA,
  SUCCESS_PAGINATION,
  DATABASE_ERROR,
  ERROR,
  USER_NOT_FOUND,
};
