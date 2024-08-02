const Job = require('../models/job');

// Create a new job
exports.createJob = async (req, res) => {
    try {
        const { title, description, companyId } = req.body;
        const newJob = await Job.create({ title, description, companyId });
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all jobs
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get job by ID
exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update job by ID
exports.updateJobById = async (req, res) => {
    try {
        const { title, description, companyId } = req.body;
        const job = await Job.findByPk(req.params.id);
        if (job) {
            job.title = title || job.title;
            job.description = description || job.description;
            job.companyId = companyId || job.companyId;
            await job.save();
            res.status(200).json(job);
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete job by ID
exports.deleteJobById = async (req, res) => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (job) {
            await job.destroy();
            res.status(200).json({ message: 'Job deleted' });
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
