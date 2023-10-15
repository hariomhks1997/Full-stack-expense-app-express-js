const Sequelize = require('sequelize');

const sequelize = new Sequelize('world', 'root', '1234567', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
