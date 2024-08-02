
const Job = require('./job');
const Application = require('./application');
const Message = require('./message');
const Contract = require('./contract');
const User = require('./user');

// User and Job
User.hasMany(Job, { foreignKey: 'companyId' });
Job.belongsTo(User, { foreignKey: 'companyId' });

// User and Application
User.hasMany(Application, { foreignKey: 'userId' });
Application.belongsTo(User, { foreignKey: 'userId' });

// Job and Application
Job.hasMany(Application, { foreignKey: 'jobId' });
Application.belongsTo(Job, { foreignKey: 'jobId' });

// User and Message (sender)
User.hasMany(Message, { foreignKey: 'senderId' });
Message.belongsTo(User, { foreignKey: 'senderId' });

// User and Message (receiver)
User.hasMany(Message, { foreignKey: 'receiverId' });
Message.belongsTo(User, { foreignKey: 'receiverId' });

// User and Contract (employer)
User.hasMany(Contract, { foreignKey: 'employerId' });
Contract.belongsTo(User, { foreignKey: 'employerId' });

// User and Contract (job seeker)
User.hasMany(Contract, { foreignKey: 'jobSeekerId' });
Contract.belongsTo(User, { foreignKey: 'jobSeekerId' });

// Job and Contract
Job.hasMany(Contract, { foreignKey: 'jobId' });
Contract.belongsTo(Job, { foreignKey: 'jobId' });

module.exports = {
  User,
  Job,
  Application,
  Message,
  Contract
};
