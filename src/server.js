const express = require('express');
const sequelize = require('./config/config');
const app = express();
const PORT = process.env.PORT || 5000;

// Import middleware
const authMiddleware = require('./middleware/authmiddleware');

// Import models
const User = require('./models/user');
const Job = require('./models/job');
const Application = require('./models/application');
const Message = require('./models/message');
const Contract = require('./models/contract');

// Import routes
const userRoutes = require('./routes/userRoutes');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationROutes');
const messageRoutes = require('./routes/messageRoutes');
const contractRoutes = require('./routes/contractRoutes');

// Initialize relationships
require('./models/index');

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Route setup
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/contracts', contractRoutes);

// Middleware setup (example for authMiddleware)
// app.use(authMiddleware); // If you want to use it globally, uncomment this

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synced and tables created...');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        process.exit(1); // Exit process with failure
    });
