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
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { namefood, price } = req.body;
        const updatedFood = await Food.findByIdAndUpdate(id, { namefood, price }, { new: true });
        res.status(200).json(updatedFood);
    } catch (error) {
        console.error('Cập nhật món ăn thất bại:', error);
        res.status(500).json({ message: 'Cập nhật món ăn thất bại. Vui lòng thử lại sau.' });
    }
});

// Route để xóa món ăn
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Food.findByIdAndDelete(id);
        res.status(200).json({ message: 'Xóa món ăn thành công.' });
    } catch (error) {
        console.error('Xóa món ăn thất bại:', error);
        res.status(500).json({ message: 'Xóa món ăn thất bại. Vui lòng thử lại sau.' });
    }
});
router.post('/add', async (req, res) => {
    try {
        const { namefood, price } = req.body;
        const newFood = new Food({ namefood, price });
        await newFood.save();
        res.status(201).json(newFood);
    } catch (error) {
        console.error('Thêm món ăn thất bại:', error);
        res.status(500).json({ message: 'Thêm món ăn thất bại. Vui lòng thử lại sau.' });
    }
});
module.exports = router;
