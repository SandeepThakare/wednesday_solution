
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bookings', 'rating', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },

  down: (queryInterface) => queryInterface.removeColumn('bookings', 'rating'),
};
