const { Sequelize } = require('sequelize');
const dotenv = require("dotenv").config()
const sequelize = new Sequelize(
    'jobboard',
    'root',
    'fiker2901#@!',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

module.exports = sequelize;