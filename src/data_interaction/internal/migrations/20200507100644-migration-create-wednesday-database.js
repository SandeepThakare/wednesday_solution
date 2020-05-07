
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING(75),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    first_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: true,
    },
    city: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    state: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    country: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    mobile: {
      type: Sequelize.STRING(15),
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
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
  down: (queryInterface) => queryInterface.dropTable('users'),
};
