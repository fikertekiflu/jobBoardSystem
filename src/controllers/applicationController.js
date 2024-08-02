const Application = require('../models/application');

// Apply for a job
exports.applyForJob = async (req, res) => {
    try {
        const { jobId } = req.body;
        const newApplication = await Application.create({
            userId: req.user.id,
            jobId
        });
        res.status(201).json(newApplication);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all applications for a user
exports.getUserApplications = async (req, res) => {
    try {
        const applications = await Application.findAll({ where: { userId: req.user.id } });
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get application by ID
exports.getApplicationById = async (req, res) => {
    try {
        const application = await Application.findByPk(req.params.id);
        if (application) {
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update application by ID
exports.updateApplicationById = async (req, res) => {
    try {
        const application = await Application.findByPk(req.params.id);
        if (application) {
            // Update application details as needed
            await application.save();
            res.status(200).json(application);
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete application by ID
exports.deleteApplicationById = async (req, res) => {
    try {
        const application = await Application.findByPk(req.params.id);
        if (application) {
            await application.destroy();
            res.status(200).json({ message: 'Application deleted' });
        } else {
            res.status(404).json({ message: 'Application not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
