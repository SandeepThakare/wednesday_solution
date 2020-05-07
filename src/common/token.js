/* eslint-disable import/named */
/**
 * this module deals with the encoding and decoding of the generated tokens
 * using jsonwebtoken
 * @author sandeep thakare
 * @since Saturday, April 4, 2020 6:43 PM
 */

import jwt from 'jsonwebtoken';
import { secretString } from './constants';
import { TimeUtility } from '.';

/**
  * this will generate the jwt toke for the payload
  * by default, token will expire after an hour.
  * @param {*} payload the data to generate token from
  */

const exp = Date.now() + TimeUtility.hoursToMillis(24);

const generateToken = (payload) => jwt.sign({ data: payload, exp }, secretString);

/**
  * this will decode the input token to the corrsopoonding payload
  * @param {*} token to decode. To be referred from generateToken method
  */
const decodeToken = (token) => jwt.verify(token, secretString, (err, decoded) => {
  if (err) {
    return undefined;
  } if (decoded.exp) {
    return decoded;
  }
  return undefined;
});

export default {
  generateToken,
  decodeToken,
};
