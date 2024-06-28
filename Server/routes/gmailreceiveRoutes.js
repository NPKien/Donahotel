
const express = require('express');
const router = express.Router();
const gmailreceiveController = require('../controllers/gmailreceiveController');

// Lấy địa chỉ email
router.get('/', gmailreceiveController.getGmail);

// Cập nhật địa chỉ email
router.put('/', gmailreceiveController.updateGmail);

module.exports = router;
