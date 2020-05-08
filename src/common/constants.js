export const baseURL = '/wednesday/api';

export const requestMethodType = {
  POST: 'post',
  GET: 'get',
};

export const requestParamsType = {
  post: 'body',
  get: 'query',
};

export const secretString = 'O9oi7f7pKIATbwLtKqrgNBq1EOo0twXs';

export const excludePath = [
  `${baseURL}/auth/login`,
  `${baseURL}/user/create`,
  '/api/user/create',
];
