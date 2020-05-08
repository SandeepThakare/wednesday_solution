const request = require('supertest');
const app = require('../src/bin/www');

const appTest = request.agent(app);

module.exports = {
  appTest,
  app,
};
