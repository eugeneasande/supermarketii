
const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

const db = {
  sequelize,
  Sequelize,
  User: require('./user')(sequelize, DataTypes),
  Product: require('./product')(sequelize, DataTypes),
  Sale: require('./sale')(sequelize, DataTypes),
  Customer: require('./customer')(sequelize, DataTypes),
  Return: require('./return')(sequelize, DataTypes),
  AuditLog: require('./auditLog')(sequelize, DataTypes),
  Config: require('./config')(sequelize, DataTypes),
};

module.exports = db;
