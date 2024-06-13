// controllers/questionController.js
const {Question} = require('../models/index');

// Lấy tất cả các câu hỏi và câu trả lời
exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.status(200).json(questions);
    } catch (error) {
        console.error('Lấy danh sách Q&A thất bại:', error);
        res.status(500).json({ message: 'Lấy danh sách Q&A thất bại. Vui lòng thử lại sau.' });
    }
};
