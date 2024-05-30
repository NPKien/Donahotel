// routes/typeroom.js
const express = require('express');
const router = express.Router();
const { Typeroom } = require('../models/index');

// Route để lấy số lượng phòng còn lại
router.get('/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const roomType = await Typeroom.findOne({ type });
        if (!roomType) {
            return res.status(404).json({ message: 'Loại phòng không tồn tại.' });
        }
        res.status(200).json({ quantity: roomType.quantity });
    } catch (error) {
        console.error('Lấy số lượng phòng thất bại:', error);
        res.status(500).json({ message: 'Lấy số lượng phòng thất bại. Vui lòng thử lại sau.' });
    }
});

module.exports = router;
