
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('AuditLog', {
    timestamp: DataTypes.DATE,
    user: DataTypes.STRING,
    action: DataTypes.STRING,
    details: DataTypes.STRING
  });
};
