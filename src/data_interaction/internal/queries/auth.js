import { User } from '../models';

const checkValidUser = async (params) => User.findAll({
  raw: true,
  attributes: [
    'uuid',
    'username',
    'password',
  ],
  where: {
    username: params.username,
    password: params.password,
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

export default {
  checkValidUser,
};
