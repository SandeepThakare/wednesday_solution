import { cabs } from '../data_interaction/internal/queries';

const createCabsUser = (params) => cabs.createCabsUser(params);

const fetchAvailableCabs = (params) => cabs.fetchAvailableCabs(params);

export default {
  createCabsUser,
  fetchAvailableCabs,
};
