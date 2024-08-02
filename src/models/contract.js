const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Contract = sequelize.define('Contract', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  employerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References the User model
      key: 'id'
    }
  },
  jobSeekerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users', // References the User model
      key: 'id'
    }
  },
  jobId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Jobs', // References the Job model
      key: 'id'
    }
  },
  terms: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('active', 'completed', 'terminated'),
    defaultValue: 'active'
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

module.exports = Contract;
