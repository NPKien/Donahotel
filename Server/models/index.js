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
    picture: {
        type: Buffer,
        required: false,
    },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: false,
    },
    expense: {
        type: Number,
        require: false,
    }, 
    bed: {
        type: String,
        required: false,
    }, 
    area:{
        type: String,
        required: false,
    },
    internet: {
        type: String,
        required: false,
    }
});
const foodSchema = new mongoose.Schema({
    namefood: {
        type: String,
        required: true,
    },
    price: {
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
  const UserSchema = new mongoose.Schema({
    user: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
        type: Number,
        required: true,
    },
  });
  const GmailreceiveSchema = new mongoose.Schema({
    gmail: {
      type: String,
      required: true,
    }
  });

const Question = mongoose.model('Question', QuestionSchema);  
const Booking = mongoose.model('Booking', bookingSchema);
const Typeroom = mongoose.model('Typeroom', typeroomSchema);
const Food = mongoose.model('Food', foodSchema);
const User = mongoose.model('User', UserSchema);
const Gmailreceive = mongoose.model('Gmailreceive', GmailreceiveSchema);

module.exports = {Booking, Typeroom, Food, Question, User, Gmailreceive };
