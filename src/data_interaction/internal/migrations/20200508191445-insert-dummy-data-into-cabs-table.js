
module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('cab_users_mst', [{
    uuid: '3bcf903d-1f0a-4f93-9967-6f3f902e7f98',
    cab_number: 'MH 31 Ah 0001',
    cab_current_status: 'Active',
    first_name: 'John',
    last_name: 'Doe',
    current_location_longitude: 22.24835,
    current_location_lattitude: 80.26192,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    uuid: 'a27170ac-7154-46d1-bcff-3454fcaed336',
    cab_number: 'MH 31 Ah 0004',
    cab_current_status: 'Active',
    first_name: 'Cal',
    last_name: 'Drogo',
    current_location_longitude: 22.24835,
    current_location_lattitude: 80.26192,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('cab_users_mst', null, {}),
};
