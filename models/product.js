const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('special', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  id1:Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  mobile:Sequelize.STRING,
  
});

module.exports = Product;
