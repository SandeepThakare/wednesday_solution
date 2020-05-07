
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    username: DataTypes.STRING(75),
    password: DataTypes.STRING(100),
    email: DataTypes.STRING(20),
    first_name: DataTypes.STRING(30),
    last_name: DataTypes.STRING(30),
    address: DataTypes.STRING(100),
    city: DataTypes.STRING(50),
    state: DataTypes.STRING(50),
    country: DataTypes.STRING(50),
    mobile: DataTypes.STRING(15),
    travel_status: DataTypes.BOOLEAN,
  }, {
    tableName: 'users',
  });
  User.associate = () => {
    // associations can be defined here
  };
  return User;
};
