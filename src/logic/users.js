import { user } from '../data_interaction/internal/queries';

const createUser = (params) => user.createUser(params);

export default {
  createUser,
};
