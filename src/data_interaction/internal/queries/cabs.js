import { uuid } from 'uuidv4';
import camelcaseKeys from 'camelcase-keys';
import { Cabs, Sequelize } from '../models';

const createCabsUser = async (params) => {
  const generateUUID = uuid();
  const {
    cabNumber,
    cabCurrentStatus,
    firstName,
    lastName,
    currentLocationLongitude,
    currentLocationLattitude,
  } = params;

  return Cabs.create({
    uuid: generateUUID,
    cab_number: cabNumber,
    first_name: firstName,
    last_name: lastName,
    cab_current_status: cabCurrentStatus,
    current_location_longitude: currentLocationLongitude,
    current_location_lattitude: currentLocationLattitude,
  })
    .then(async () => ({
      status: true,
      message: 'Cab User created successfully',
    }))
    .catch((error) => ({
      status: false,
      message: error.message,
    }));
};

const editCabsUser = async (params) => {
  const {
    cabNumber,
    cabCurrentStatus,
    firstName,
    lastName,
    currentLocationLongitude,
    currentLocationLattitude,
  } = params;

  return Cabs.update({
    cab_number: cabNumber,
    first_name: firstName,
    last_name: lastName,
    cab_current_status: cabCurrentStatus,
    current_location_longitude: currentLocationLongitude,
    current_location_lattitude: currentLocationLattitude,
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

const checkCabStatus = (cabId) => Cabs.findOne({
  raw: true,
  attributes: [
    'uuid',
    'first_name',
    'last_name',
    'cab_current_status',
  ],
  where: {
    uuid: cabId,
  },
})
  .then((response) => ({
    status: true,
    message: 'Data fetched successfully.',
    data: response,
  }))
  .catch((error) => {
    console.log(error);
    return {
      status: false,
      message: error.message,
    };
  });

const updateCabStatus = async (params) => {
  const {
    cabId,
    status,
  } = params;

  return Cabs.update({
    cab_current_status: status,
  }, {
    where: {
      uuid: cabId,
    },
  })
    .then(async () => ({
      state: true,
      message: 'Cab Status Updated successfully',
    }))
    .catch((error) => ({
      status: false,
      message: error.message,
    }));
};

const fetchAvailableCabs = ({
  currentLocationLattitude,
  currentLocationLongitude,
  limit = 10,
  skip = 0,
}) => Cabs.findAll({
  raw: true,
  attributes: [
    'uuid',
    'cab_number',
    'first_name',
    'last_name',
    'current_location_longitude',
    'current_location_lattitude',
  ],
  where: {
    cab_current_status: 'Active',
    [Sequelize.Op.and]: [
      {
        current_location_longitude: {
          [Sequelize.Op.between]: [currentLocationLongitude - 0.1, currentLocationLongitude + 0.1],
        },
      },
      {
        current_location_lattitude: {
          [Sequelize.Op.between]: [currentLocationLattitude - 0.1, currentLocationLattitude + 0.1],
        },
      },
    ],
  },
  limit,
  offset: skip,
})
  .then((response) => ({
    status: true,
    message: 'Data fetched successfully.',
    data: camelcaseKeys(response),
  }))
  .catch((error) => {
    console.log(error);
    return {
      status: false,
      message: error.message,
    };
  });

export default {
  createCabsUser,
  editCabsUser,
  checkCabStatus,
  updateCabStatus,
  fetchAvailableCabs,
};
