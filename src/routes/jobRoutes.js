const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobContollers');
const { authenticateToken } = require('../middleware/authmiddleware');

// Create a new job (protected route)
router.post('/', authenticateToken, jobController.createJob);
// Get all jobs
router.get('/', jobController.getAllJobs);
// Get job by ID
router.get('/:id', jobController.getJobById);
// Update job by ID (protected route)
router.put('/:id', authenticateToken, jobController.updateJobById);
// Delete job by ID (protected route)
router.delete('/:id', authenticateToken, jobController.deleteJobById);

module.exports = router;
