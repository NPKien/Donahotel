const Booking = require('../models/index');

exports.createBooking = async (req, res) => {
    try {
        const { ngayden, ngaydi, loaiphong, soluong, ten, sodienthoai, email, ghichu } = req.body;

        // Kiểm tra xem booking với thông tin tương tự đã tồn tại hay chưa (tuỳ vào yêu cầu cụ thể)
        const existingBooking = await Booking.findOne({ ngayden, ngaydi, loaiphong, ten });
        if (existingBooking) {
            return res.status(400).json({ message: 'Đặt phòng đã tồn tại.' });
        }

        // Tạo booking mới
        const newBooking = new Booking({
            ngayden,
            ngaydi,
            loaiphong,
            soluong,
            ten,
            sodienthoai,
            email,
            ghichu
        });

        // Lưu booking vào database
        await newBooking.save();

        res.status(201).json({ message: 'Đặt phòng thành công', booking: newBooking });
    } catch (error) {
        console.error('Đặt phòng thất bại:', error);
        res.status(500).json({ message: 'Đặt phòng thất bại. Vui lòng thử lại sau.' });
    }
};
