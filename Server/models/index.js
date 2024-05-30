// backend/models/booking.js
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    ngayden: {
        type: Date,
        required: true,
    },
    ngaydi: {
        type: Date,
        required: true,
    },
    loaiphong: {
        type: String,
        required: true,
    },
    soluong: {
        type: Number,
        required: true,
    },
    ten: {
        type: String,
        required: true,
    },
    sodienthoai: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    ghichu: {
        type: String,
    },
});
const typeroomSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
})

const Booking = mongoose.model('Booking', bookingSchema);
const Typeroom = mongoose.model('Typeroom', typeroomSchema);

module.exports = {Booking, Typeroom};
