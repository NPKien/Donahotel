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
    },
    expense: {
        type: Number,
        require: true,
    }, 
    bed: {
        type: String,
        required: true,
    }, 
    area:{
        type: String,
        required: true,
    },
    internet: {
        type: String,
        required: true,
    }
});
const foodSchema = new mongoose.Schema({
    namefood: {
        type: String,
        required: true,
    },
    response: {
        type: Number,
        required: true,
    }
});
const QuestionSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  });
  
const Question = mongoose.model('Question', QuestionSchema);  
const Booking = mongoose.model('Booking', bookingSchema);
const Typeroom = mongoose.model('Typeroom', typeroomSchema);
const Food = mongoose.model('Food', foodSchema);

module.exports = {Booking, Typeroom, Food, Question};
