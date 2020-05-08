
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('bookings', 'booking_from');

    await queryInterface.removeColumn('bookings', 'booking_to');

    await queryInterface.addColumn('bookings', 'booking_from_longitude', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });

    await queryInterface.addColumn('bookings', 'booking_from_lattitude', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });

    await queryInterface.addColumn('bookings', 'booking_to_longitude', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });

    await queryInterface.addColumn('bookings', 'booking_to_lattitude', {
      type: Sequelize.DOUBLE,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('bookings', 'booking_from', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });

    await queryInterface.addColumn('bookings', 'booking_to', {
      type: Sequelize.FLOAT,
      allowNull: true,
    });

    await queryInterface.removeColumn('bookings', 'booking_from_longitude');

    await queryInterface.removeColumn('bookings', 'booking_to_longitude');

    await queryInterface.removeColumn('bookings', 'booking_lattitude');

    await queryInterface.removeColumn('bookings', 'booking_lattitude');
  },
};
