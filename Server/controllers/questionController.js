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
exports.addQuestion = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const newQuestion = new Question({ question, answer });
        await newQuestion.save();
        res.status(201).json(newQuestion);
    } catch (error) {
        console.error('Thêm Q&A thất bại:', error);
        res.status(500).json({ message: 'Thêm Q&A thất bại. Vui lòng thử lại sau.' });
    }
};


exports.updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer } = req.body;
        const updatedQuestion = await Question.findByIdAndUpdate(id, { question, answer }, { new: true });
        res.status(200).json(updatedQuestion);
    } catch (error) {
        console.error('Cập nhật Q&A thất bại:', error);
        res.status(500).json({ message: 'Cập nhật Q&A thất bại. Vui lòng thử lại sau.' });
    }
};

// Xóa câu hỏi và câu trả lời
exports.deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        await Question.findByIdAndDelete(id);
        res.status(200).json({ message: 'Xóa Q&A thành công.' });
    } catch (error) {
        console.error('Xóa Q&A thất bại:', error);
        res.status(500).json({ message: 'Xóa Q&A thất bại. Vui lòng thử lại sau.' });
    }
};