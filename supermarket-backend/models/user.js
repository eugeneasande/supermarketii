
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: DataTypes.STRING,
    role: DataTypes.STRING
  });
};
