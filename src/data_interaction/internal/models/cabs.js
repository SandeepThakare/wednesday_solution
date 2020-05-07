
module.exports = (sequelize, DataTypes) => {
  const Cabs = sequelize.define('Cabs', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    cab_number: DataTypes.STRING(20),
    cab_current_status: DataTypes.STRING(20),
    first_name: DataTypes.STRING(100),
    last_name: DataTypes.STRING(100),
    current_location_longitude: DataTypes.DOUBLE,
    current_location_lattitude: DataTypes.DOUBLE,
  }, {
    tableName: 'cab_users_mst',
  });
  Cabs.associate = () => { };
  return Cabs;
};
