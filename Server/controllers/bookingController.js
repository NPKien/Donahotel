const { Booking, Typeroom } = require('../models/index');

exports.createBooking = async (req, res) => {
    try {
        const { ngayden, ngaydi, loaiphong, soluong, ten, sodienthoai, email, ghichu } = req.body;

        // Kiểm tra xem booking với thông tin tương tự đã tồn tại hay chưa (tuỳ vào yêu cầu cụ thể)
        const existingBooking = await Booking.findOne({ ngayden, ngaydi, loaiphong, ten });
        if (existingBooking) {
            return res.status(400).json({ message: 'Đặt phòng đã tồn tại.' });
        }

        // Kiểm tra số lượng phòng của loại phòng được yêu cầu
        const roomType = await Typeroom.findOne({ type: loaiphong });
        if (!roomType) {
            return res.status(400).json({ message: 'Loại phòng không tồn tại.' });
        }

        if (roomType.quantity < soluong) {
            return res.status(400).json({ message: `Không đủ số lượng phòng. Chỉ còn ${roomType.quantity} phòng.` });
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

        // Cập nhật số lượng phòng
        roomType.quantity -= soluong;
        await roomType.save();

        res.status(201).json({ message: 'Đặt phòng thành công', booking: newBooking });
    } catch (error) {
        console.error('Đặt phòng thất bại:', error);
        res.status(500).json({ message: 'Đặt phòng thất bại. Vui lòng thử lại sau.' });
    }
};
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        console.error('Lấy danh sách đặt phòng thất bại:', error);
        res.status(500).json({ message: 'Lấy danh sách đặt phòng thất bại. Vui lòng thử lại sau.' });
    }
};

exports.deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ message: 'Đặt phòng không tồn tại.' });
        }

        // Cập nhật số lượng phòng
        const roomType = await Typeroom.findOne({ type: booking.loaiphong });
        if (roomType) {
            roomType.quantity += booking.soluong;
            await roomType.save();
        }

        res.status(200).json({ message: 'Đã xóa đặt phòng thành công.' });
    } catch (error) {
        console.error('Xóa đặt phòng thất bại:', error);
        res.status(500).json({ message: 'Xóa đặt phòng thất bại. Vui lòng thử lại sau.' });
    }
};