
module.exports = (sequelize, DataTypes) => {
  const Bookings = sequelize.define('Bookings', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    booking_start_time: DataTypes.DATE,
    booking_end_time: DataTypes.DATE,
    booking_owner: DataTypes.UUID,
    booking_cab_id: DataTypes.UUID,
    booking_status: DataTypes.STRING(50),
    booking_from_longitude: DataTypes.DOUBLE,
    booking_from_lattitude: DataTypes.DOUBLE,
    booking_to_longitude: DataTypes.DOUBLE,
    booking_to_lattitude: DataTypes.DOUBLE,
  }, {
    tableName: 'bookings',
  });
  Bookings.associate = (models) => {
    models.Bookings.belongsTo(models.Users, {
      foreignKey: 'booking_owner',
    });

    models.Bookings.belongsTo(models.Cabs, {
      foreignKey: 'booking_cab_id',
    });
  };
  return Bookings;
};
