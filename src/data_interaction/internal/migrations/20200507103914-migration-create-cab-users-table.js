
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('cab_users_mst', {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    cab_number: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    cab_current_status: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    first_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
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
  down: (queryInterface) => queryInterface.dropTable('cab_users_mst'),
};
