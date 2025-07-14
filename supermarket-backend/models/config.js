
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Config', {
    key: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    value: DataTypes.STRING
  });
};
