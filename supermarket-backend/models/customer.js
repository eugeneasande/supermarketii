
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Customer', {
    customer_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    visit_count: DataTypes.INTEGER
  });
};
