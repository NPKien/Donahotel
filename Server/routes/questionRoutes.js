// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// Route để lấy tất cả các câu hỏi và câu trả lời
router.get('/', questionController.getAllQuestions);

module.exports = router;
