const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const { authenticateToken } = require('../middleware/authmiddleware');

// Apply for a job (protected route)
router.post('/', authenticateToken, applicationController.applyForJob);
// Get all applications for a user (protected route)
router.get('/', authenticateToken, applicationController.getUserApplications);
// Get application by ID (protected route)
router.get('/:id', authenticateToken, applicationController.getApplicationById);

module.exports = router;
