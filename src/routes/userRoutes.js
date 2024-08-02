const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authmiddleware');

// Register a new user
router.post('/register', userController.registerUser);
// Login a user
router.post('/login', userController.loginUser);

// Get all users (protected route)
router.get('/', authenticateToken, userController.getAllUsers);
// Get user by ID (protected route)
router.get('/:id', authenticateToken, userController.getUserById);
// Update user by ID (protected route)
router.put('/:id', authenticateToken, userController.updateUserById);
// Delete user by ID (protected route)
router.delete('/:id', authenticateToken, userController.deleteUserById);

module.exports = router;
