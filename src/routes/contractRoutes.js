const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');
const { authenticateToken } = require('../middleware/authmiddleware');

// Create a contract (protected route)
router.post('/', authenticateToken, contractController.createContract);
// Get all contracts for a user (protected route)
router.get('/', authenticateToken, contractController.getUserContracts);
// Get contract by ID (protected route)
router.get('/:id', authenticateToken, contractController.getContractById);

module.exports = router;
