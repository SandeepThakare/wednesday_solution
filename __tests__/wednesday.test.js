/* eslint-disable no-useless-escape */
const { appTest } = require('./routeHandler');
const {
  userErrorConstant,
  userSuccessConstant,
  bookingSuccessConstant,
  bookingErrorConstant,
  cabsSuccessConstant,
  cabsErrorConstant,
  bookingConfirmSuccess,
  bookingConfirmError,
  bookingEndSuccess,
  bookingEndError,
  bookingListSucess,
} = require('./testConstants');

describe('User Test Cases', () => {
  it('should create a new user', async () => {
    const { statusCode } = await appTest
      .post('/wednesday/api/user/create')
      .send(userSuccessConstant);
    expect(statusCode).toEqual(200);
  });

  it('should return validation error', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/user/create')
      .send(userSuccessConstant);
    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Validation error');
  });

  it('should return 400 error', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/user/create')
      .send(userErrorConstant);
    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. "username" is required.');
  });
});

describe('Booking Test Cases', () => {
  let token = null;
  beforeAll(async () => {
    const { body } = await appTest.post('/wednesday/api/auth/login')
      .send({
        username: 'sandeepthakare',
        password: 'S@ndeep123',
      });
    token = body.accessToken;
  });

  it('should create a new booking', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/bookings/create')
      .set({ Authorization: token })
      .send(bookingSuccessConstant);

    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Booking created successfully');
  });

  it('should return validation error', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/bookings/create')
      .set({ Authorization: token })
      .send(bookingErrorConstant);

    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. \"bookingFromLongitude\" is required. \"bookingFromLattitude\" is required.');
  });
});

describe('Cabs Users Test Cases', () => {
  let token = null;
  beforeAll(async () => {
    const { body } = await appTest.post('/wednesday/api/auth/login')
      .send({
        username: 'sandeepthakare',
        password: 'S@ndeep123',
      });
    token = body.accessToken;
  });

  it('should create a new cab to book', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/cabs/create')
      .set({ Authorization: token })
      .send(cabsSuccessConstant);

    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Cab User created successfully');
  });

  it('should return validation error', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/cabs/create')
      .set({ Authorization: token })
      .send(cabsErrorConstant);

    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. \"cabNumber\" is required.');
  });
});

describe('Booking Confirm Test Cases', () => {
  let token = null;
  beforeAll(async () => {
    const { body } = await appTest.post('/wednesday/api/auth/login')
      .send({
        username: 'sandeepthakare',
        password: 'S@ndeep123',
      });
    token = body.accessToken;
  });

  it('should return booking confirm message', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/bookings/confirmBooking')
      .set({ Authorization: token })
      .send(bookingConfirmSuccess);

    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Booking Confirmed !!!');
  });

  it('should return validation error on booking confirm', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/bookings/confirmBooking')
      .set({ Authorization: token })
      .send(bookingConfirmError);

    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. \"bookingId\" is required.');
  });
});

describe('Booking End Test Cases', () => {
  let token = null;
  beforeAll(async () => {
    const { body } = await appTest.post('/wednesday/api/auth/login')
      .send({
        username: 'sandeepthakare',
        password: 'S@ndeep123',
      });
    token = body.accessToken;
  });

  it('should return booking end message', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/bookings/endBooking')
      .set({ Authorization: token })
      .send(bookingEndSuccess);

    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Booking Completed !!!');
  });

  it('should return validation error on booking end', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/bookings/endBooking')
      .set({ Authorization: token })
      .send(bookingEndError);

    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. \"bookingId\" is required.');
  });
});

describe('Booking List Test Cases', () => {
  let token = null;
  beforeAll(async () => {
    const { body } = await appTest.post('/wednesday/api/auth/login')
      .send({
        username: 'sandeepthakare',
        password: 'S@ndeep123',
      });
    token = body.accessToken;
  });

  it('should return booking end message', async () => {
    const { statusCode, body } = await appTest
      .post('/wednesday/api/bookings/list')
      .set({ Authorization: token })
      .send(bookingListSucess);

    expect(statusCode).toEqual(200);
    expect(body.message).toEqual('Fetch Data Successfully !!!');
  });

  it('should return validation error on booking end', async () => {
    const { statusCode, text } = await appTest
      .post('/wednesday/api/bookings/list')
      .set({ Authorization: token })
      .send({});

    expect(statusCode).toEqual(400);
    expect(text).toEqual('Error validating request body. \"userId\" is required.');
  });
});
