
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Return', {
    return_id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    sale_id: DataTypes.STRING,
    product_id: DataTypes.STRING,
    product_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    return_date: DataTypes.DATE,
    processed_by: DataTypes.STRING
  });
};
