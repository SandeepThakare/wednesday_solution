
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('bookings', [{
    uuid: 'dfcdd5cb-169f-4fcb-82a5-ecf0a66cd3af',
    booking_start_time: '2020-05-07 21:09:46',
    booking_end_time: '2020-05-07 22:09:46',
    booking_owner: 'b391f256-dad6-472e-bee3-e3d64386697c',
    booking_cab_id: '3bcf903d-1f0a-4f93-9967-6f3f902e7f98',
    booking_status: 'Completed',
    createdAt: new Date(),
    updatedAt: new Date(),
    rating: null,
    booking_from_longitude: 21.14835,
    booking_from_lattitude: 79.16192,
    booking_to_longitude: 21.1458,
    booking_to_lattitude: 79.088158,
  },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('bookings', null, {}),
};
