const request = require('supertest');
const app = require('../src/bin/www');

const appTest = request.agent(app);

describe('Post Endpoints', () => {
  it('should create a new user', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/user/create')
      .send({
        username: 'sandeepthakare123',
        password: 'S@ndeep123',
        firstName: 'Sandeep',
        lastName: 'Thakare',
        address: 'Nagpur',
        city: 'Nagpur',
        state: 'MH',
        country: 'INDIA',
        mobile: '8956916391',
        email: 'sandythakare8@gmail.com',
      });
    console.log(body);
    expect(statusCode).toEqual(200);
  });

  it('should return validation error', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/user/create')
      .send({
        username: 'sandeepthakare123',
        password: 'S@ndeep123',
        firstName: 'Sandeep',
        lastName: 'Thakare',
        address: 'Nagpur',
        city: 'Nagpur',
        state: 'MH',
        country: 'INDIA',
        mobile: '8956916391',
        email: 'sandythakare8@gmail.com',
      });
    console.log(body);
    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Validation error');
  });

  it('should return 400 error', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/user/create')
      .send({
        password: 'S@ndeep123',
        firstName: 'Sandeep',
        lastName: 'Thakare',
        address: 'Nagpur',
        city: 'Nagpur',
        state: 'MH',
        country: 'INDIA',
        mobile: '8956916391',
        email: 'sandythakare8@gmail.com',
      });
    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. "username" is required.');
  });
});
