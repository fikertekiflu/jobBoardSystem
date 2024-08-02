const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const { authenticateToken } = require('../middleware/authmiddleware');

// Send a message (protected route)
router.post('/', authenticateToken, messageController.sendMessage);
// Get all messages for a user (protected route)
router.get('/', authenticateToken, messageController.getUserMessages);
// Get message by ID (protected route)
router.get('/:id', authenticateToken, messageController.getMessageById);
// Get messages between two users (protected route)
router.get('/between/:userId', authenticateToken, messageController.getMessagesBetweenUsers);
// Update message by ID (protected route)
router.put('/:id', authenticateToken, messageController.updateMessageById);
// Delete message by ID (protected route)
router.delete('/:id', authenticateToken, messageController.deleteMessageById);

module.exports = router;
