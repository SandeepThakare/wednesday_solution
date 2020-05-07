module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('cab_users_mst', 'current_location_longitude', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });

    await queryInterface.addColumn('cab_users_mst', 'current_location_lattitude', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('cab_users_mst', 'current_location_longitude');

    await queryInterface.removeColumn('cab_users_mst', 'current_location_lattitude');
  },
};
