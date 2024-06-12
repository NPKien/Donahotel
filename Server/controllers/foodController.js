const express = require('express');
const router = express.Router();
const { Food } = require('../models/index');

// Route để lấy tất cả các món ăn
router.get('/all', async (req, res) => {
    try {
        const foods = await Food.find();
        res.status(200).json(foods);
    } catch (error) {
        console.error('Lấy danh sách món ăn thất bại:', error);
        res.status(500).json({ message: 'Lấy danh sách món ăn thất bại. Vui lòng thử lại sau.' });
    }
});

module.exports = router;
