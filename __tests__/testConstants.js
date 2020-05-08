const userSuccessConstant = {
  username: 'sandeepthakare0103',
  password: 'S@ndeep123',
  firstName: 'Sandeep',
  lastName: 'Thakare',
  address: 'Nagpur',
  city: 'Nagpur',
  state: 'MH',
  country: 'INDIA',
  mobile: '8956916399',
  email: 'sandythakare1@gmail.com',
};

const userErrorConstant = {
  password: 'S@ndeep123',
  firstName: 'Sandeep',
  lastName: 'Thakare',
  address: 'Nagpur',
  city: 'Nagpur',
  state: 'MH',
  country: 'INDIA',
  mobile: '8956916399',
  email: 'sandythakare1@gmail.com',
};

const bookingSuccessConstant = {
  bookingOwner: '55f88adf-1c04-4f6c-9ca6-c3a2f7c5ef2e',
  bookingCabId: '3bcf903d-1f0a-4f93-9967-6f3f902e7f98',
  bookingFromLongitude: 23.148350,
  bookingFromLattitude: 78.161920,
  bookingToLongitude: 21.145800,
  bookingToLattitude: 79.088158,
};

const bookingErrorConstant = {
  bookingOwner: 'd241b20a-157b-4ccb-b76f-24c5d5443749',
  bookingCabId: 'a27170ac-7154-46d1-bcff-3454fcaed336',
  bookingToLongitude: 21.145800,
  bookingToLattitude: 79.088158,
};

const cabsSuccessConstant = {
  cabNumber: 'MH 31 Ah 0006',
  cabCurrentStatus: 'Active',
  firstName: 'Aarya',
  lastName: 'Stark',
  currentLocationLongitude: 26.148350,
  currentLocationLattitude: 84.161920,
};

const cabsErrorConstant = {
  cabCurrentStatus: 'Active',
  firstName: 'Aarya',
  lastName: 'Stark',
  currentLocationLattitude: 84.161920,
};

const bookingConfirmSuccess = {
  bookingId: 'dfcdd5cb-169f-4fcb-82a5-ecf0a66cd3af',
  bookingStartTime: '2020-05-08 02:39:46',
};

const bookingConfirmError = {
  bookingStartTime: '2020-05-08 02:39:46',
};

const bookingEndSuccess = {
  bookingId: 'dfcdd5cb-169f-4fcb-82a5-ecf0a66cd3af',
  bookingEndTime: '2020-05-08 03:39:46',
};

const bookingEndError = {
  bookingEndTime: '2020-05-08 03:39:46',
};

const bookingListSucess = {
  userId: 'd241b20a-157b-4ccb-b76f-24c5d5443749',
};

module.exports = {
  userSuccessConstant,
  userErrorConstant,
  bookingSuccessConstant,
  bookingErrorConstant,
  cabsSuccessConstant,
  cabsErrorConstant,
  bookingConfirmSuccess,
  bookingConfirmError,
  bookingEndSuccess,
  bookingEndError,
  bookingListSucess,
};
