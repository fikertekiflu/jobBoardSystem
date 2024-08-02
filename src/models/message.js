const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  senderId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References the User model
      key: 'id'
    }
  },
  receiverId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References the User model
      key: 'id'
    }
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Message;
