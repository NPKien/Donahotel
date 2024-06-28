
const { Gmailreceive } = require('../models/index');

// Lấy địa chỉ email từ cơ sở dữ liệu
exports.getGmail = async (req, res) => {
    try {
        const email = await Gmailreceive.findOne();
        if (email) {
            res.status(200).json(email);
        } else {
            res.status(404).json({ message: 'Không tìm thấy địa chỉ email.' });
        }
    } catch (error) {
        console.error('Lấy địa chỉ email thất bại:', error);
        res.status(500).json({ message: 'Lấy địa chỉ email thất bại. Vui lòng thử lại sau.' });
    }
};

// Cập nhật địa chỉ email
exports.updateGmail = async (req, res) => {
    try {
        const { gmail } = req.body;
        const email = await Gmailreceive.findOneAndUpdate({}, { gmail }, { new: true, upsert: true });
        res.status(200).json(email);
    } catch (error) {
        console.error('Cập nhật địa chỉ email thất bại:', error);
        res.status(500).json({ message: 'Cập nhật địa chỉ email thất bại. Vui lòng thử lại sau.' });
    }
};
