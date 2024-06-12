// routes/typeroom.js
const express = require('express');
const router = express.Router();
const { Typeroom } = require('../models/index');

// Route để lấy thông tin phòng theo loại
router.get('/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const roomType = await Typeroom.findOne({ type });
        if (!roomType) {
            return res.status(404).json({ message: 'Loại phòng không tồn tại.' });
        }
        res.status(200).json(roomType); // Trả về thông tin loại phòng
    } catch (error) {
        console.error('Lấy thông tin phòng thất bại:', error);
        res.status(500).json({ message: 'Lấy thông tin phòng thất bại. Vui lòng thử lại sau.' });
    }
});

module.exports = router;
