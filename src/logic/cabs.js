import { cabs } from '../data_interaction/internal/queries';

const createCabsUser = (params) => cabs.createCabsUser(params);

export default {
  createCabsUser,
};
