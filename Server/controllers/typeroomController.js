const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Typeroom } = require('../models/index');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/all', async (req, res) => {
    try {
        const allRooms = await Typeroom.find();
        res.status(200).json(allRooms);
    } catch (error) {
        console.error('Lấy tất cả các loại phòng thất bại:', error);
        res.status(500).json({ message: 'Lấy tất cả các loại phòng thất bại. Vui lòng thử lại sau.' });
    }
});

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

router.post('/add', upload.single('picture'), async (req, res) => {
    try {
        const { name, type, quantity, expense, bed, area, internet } = req.body;

        // Kiểm tra xem name hoặc type có tồn tại trong cơ sở dữ liệu không
        const existingTyperoom = await Typeroom.findOne({ $or: [{ name }, { type }] });
        if (existingTyperoom) {
            let errorMessage = 'Tên hoặc loại phòng đã tồn tại.';
            if (existingTyperoom.name === name && existingTyperoom.type === type) {
                errorMessage = 'Tên và loại phòng đều đã tồn tại.';
            } else if (existingTyperoom.name === name) {
                errorMessage = 'Tên phòng đã tồn tại.';
            } else if (existingTyperoom.type === type) {
                errorMessage = 'Loại phòng đã tồn tại.';
            }
            return res.status(400).json({ message: errorMessage });
        }

        // Tạo một tài liệu Typeroom mới
        const newTyperoom = new Typeroom({
            name,
            type,
            quantity,
            expense,
            bed,
            area,
            internet,
            picture: req.file ? req.file.buffer : null // Lưu trữ dữ liệu hình ảnh nhị phân nếu có
        });

        // Lưu tài liệu vào cơ sở dữ liệu
        await newTyperoom.save();

        res.status(201).json({ message: 'Typeroom added successfully', typeroom: newTyperoom });
    } catch (error) {
        console.error('Error adding Typeroom:', error);
        res.status(500).json({ message: 'Error adding Typeroom', error: error.message });
    }
});

router.put('/update/:type', upload.single('picture'), async (req, res) => {
    try {
        const { type } = req.params;
        const { name, quantity, expense, bed, area, internet, newType } = req.body;

        // Tìm loại phòng hiện tại
        const currentTyperoom = await Typeroom.findOne({ type });
        if (!currentTyperoom) {
            return res.status(404).json({ message: 'Loại phòng không tồn tại.' });
        }

        // Kiểm tra xem name hoặc newType đã tồn tại trong cơ sở dữ liệu chưa (ngoại trừ loại phòng hiện tại)
        const existingTyperoom = await Typeroom.findOne({
            $or: [
                { name: name },
                { type: newType }
            ],
            _id: { $ne: currentTyperoom._id }
        });

        if (existingTyperoom) {
            let errorMessage = 'Tên hoặc loại phòng đã tồn tại.';
            if (existingTyperoom.name === name && existingTyperoom.type === newType) {
                errorMessage = 'Tên và loại phòng đều đã tồn tại.';
            } else if (existingTyperoom.name === name) {
                errorMessage = 'Tên phòng đã tồn tại.';
            } else if (existingTyperoom.type === newType) {
                errorMessage = 'Loại phòng đã tồn tại.';
            }
            return res.status(400).json({ message: errorMessage });
        }

        // Tạo đối tượng cập nhật
        const updateData = { name, type: newType, quantity, expense, bed, area, internet };

        if (req.file) {
            updateData.picture = req.file.buffer; // Cập nhật dữ liệu hình ảnh nhị phân nếu có
        }

        const updatedTyperoom = await Typeroom.findOneAndUpdate({ type }, updateData, { new: true });

        res.status(200).json({ message: 'Typeroom updated successfully', typeroom: updatedTyperoom });
    } catch (error) {
        console.error('Error updating Typeroom:', error);
        res.status(500).json({ message: 'Error updating Typeroom', error: error.message });
    }
});


router.delete('/delete/:type', async (req, res) => {
    try {
        const { type } = req.params;
        const deletedTyperoom = await Typeroom.findOneAndDelete({ type });

        if (!deletedTyperoom) {
            return res.status(404).json({ message: 'Loại phòng không tồn tại.' });
        }

        res.status(200).json({ message: 'Typeroom deleted successfully', typeroom: deletedTyperoom });
    } catch (error) {
        console.error('Error deleting Typeroom:', error);
        res.status(500).json({ message: 'Error deleting Typeroom', error: error.message });
    }
});

module.exports = router;
