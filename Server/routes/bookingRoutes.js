const express = require('express');
const { createBooking } = require('../controllers/bookingController'); // Chỉnh sửa tên ở đây
const router = express.Router();

router.post('/', createBooking);

module.exports = router;
