const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setupModels = require('./../db/models');

const sequelize = new Sequelize(
  config.dbName, // name database
  config.dbUser, // user database
  config.dbPassword, // password database
  {
    host: config.dbHost,
    dialect: 'postgres', // 'postgresql' is deprecated, use 'postgres'
    dialectOptions: {
      ssl: {
        require: true, // This is the key option to set SSL/TLS requirement
        rejectUnauthorized: false, // Set to true in production with valid certificates
      },
    },
  }
);

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;
