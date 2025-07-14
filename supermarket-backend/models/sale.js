
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Sale', {
    id: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    cashier: DataTypes.STRING,
    product_id: DataTypes.STRING,
    product_name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT,
    discount: DataTypes.FLOAT,
    customer_id: DataTypes.STRING
  });
};
