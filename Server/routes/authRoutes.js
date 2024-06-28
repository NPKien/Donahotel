const express = require('express');
const router = express.Router();
const { register, login, authMiddleware, getLoggedInUser, getUsersByRole, deleteUser } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/me', authMiddleware(), getLoggedInUser);
router.get('/role/:role', getUsersByRole);
router.delete('/:userId', deleteUser);

module.exports = router;
