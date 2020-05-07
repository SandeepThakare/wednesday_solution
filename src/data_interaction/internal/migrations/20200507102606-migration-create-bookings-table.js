
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('bookings', {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    booking_start_time: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    booking_end_time: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    booking_from: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    booking_to: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    booking_owner: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    booking_cab_id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    booking_status: {
      type: Sequelize.STRING(20),
      allowNull: true,
      defaultValue: 'Waiting',
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }, {}),
  down: (queryInterface) => queryInterface.dropTable('bookings'),
};
