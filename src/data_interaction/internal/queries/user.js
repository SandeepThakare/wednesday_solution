import { uuid } from 'uuidv4';
import { User } from '../models';

const createUser = async (params) => {
  const generateUUID = uuid();
  const {
    username,
    password,
    firstName,
    lastName,
    address,
    city,
    state,
    country,
    mobile,
    email,
  } = params;

  return User.create({
    uuid: generateUUID,
    username,
    password,
    first_name: firstName,
    last_name: lastName,
    address,
    city,
    state,
    country,
    mobile,
    email,
  })
    .then(async () => ({
      status: true,
      message: 'User created successfully',
    }))
    .catch((error) => ({
      status: false,
      message: error.message,
    }));
};

const editUser = async (params) => {
  const {
    password,
    firstName,
    lastName,
    address,
    city,
    state,
    country,
    mobile,
    email,
  } = params;

  return User.update({
    password,
    first_name: firstName,
    last_name: lastName,
    address,
    city,
    state,
    country,
    mobile,
    email,
  }, {
    where: {
      uuid: params.uuid,
    },
  })
    .then(async () => ({
      state: true,
      message: 'User edited successfully',
    }))
    .catch((error) => ({
      status: false,
      message: error.message,
    }));
};

export default {
  createUser,
  editUser,
};
