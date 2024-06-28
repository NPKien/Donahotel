<template>
    <div>
      <div class="heading" >Danh sách Q&A</div>
      <br><br>
      <div v-for="question in questions" :key="question._id" class="question-item">
        <div class="question-info">
          <div v-if="editMode === question._id">
            <input v-model="question.question" placeholder="Câu hỏi" class="edit-input" />
            <input v-model="question.answer" placeholder="Câu trả lời" class="edit-input" />
          </div>
          <div v-else>
            <span class="question-text">{{ question.question }}</span><br>
            <span class="answer-text">{{ question.answer }}</span>
          </div>
        </div>
        <div class="button-group">
          <button @click="toggleEdit(question._id)" class="edit-button">
            {{ editMode === question._id ? 'Lưu' : 'Sửa' }}
          </button>
          <button @click="deleteQuestion(question._id)" class="delete-button">Xóa</button>
        </div>
      </div>
  
      <div class="heading">Thêm Q&A mới</div>
      <div class="new-question">
        <input v-model="newQuestion.question" placeholder="Câu hỏi" class="edit-input" />
        <input v-model="newQuestion.answer" placeholder="Câu trả lời" class="edit-input" />
        <button @click="addQuestion" class="add-button">Thêm</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        questions: [],
        editMode: null,
        newQuestion: {
          question: '',
          answer: ''
        },
        apiUrl: import.meta.env.VITE_API_URL,
      };
    },
    methods: {
      async fetchQuestions() {
        try {
          const response = await axios.get(`${this.apiUrl}/question/`);
          this.questions = response.data;
        } catch (error) {
          console.error('Lấy danh sách Q&A thất bại:', error);
        }
      },
      toggleEdit(id) {
        if (this.editMode === id) {
          this.saveQuestion(id);
        }
        this.editMode = this.editMode === id ? null : id;
      },
      async saveQuestion(id) {
        const question = this.questions.find(q => q._id === id);
        try {
          await axios.put(`${this.apiUrl}/question/${id}`, {
            question: question.question,
            answer: question.answer
          });
        } catch (error) {
          console.error('Cập nhật Q&A thất bại:', error);
        }
      },
      async deleteQuestion(id) {
        try {
          await axios.delete(`${this.apiUrl}/question/${id}`);
          this.questions = this.questions.filter(q => q._id !== id);
        } catch (error) {
          console.error('Xóa Q&A thất bại:', error);
        }
      },
      async addQuestion() {
        try {
          const response = await axios.post(`${this.apiUrl}/question/add`, this.newQuestion);
          this.questions.push(response.data);
          this.newQuestion = { question: '', answer: '' };
        } catch (error) {
          console.error('Thêm Q&A thất bại:', error);
        }
      }
    },
    mounted() {
      this.fetchQuestions();
    }
  };
  </script>
  
  <style scoped>
  .question-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .heading {
  font-size: 30px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px;
}

  .question-info {
    flex: 1;
  }
  
  .question-text {
    font-weight: bold;
  }
  
  .edit-input {
    width: 150px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 5px;
  }
  
  .button-group {
    display: flex;
    align-items: center;
  }
  
  .edit-button, .delete-button, .add-button {
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
  }
  
  .edit-button:hover, .delete-button:hover, .add-button:hover {
    background-color: #0056b3;
  }
  
  .new-question {
    margin-top: 20px;
  }
  
  .new-question input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 10px;
  }
  
  .new-question button {
    padding: 5px 10px;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 3px;
  }
  
  .new-question button:hover {
    background-color: #218838;
  }
  </style>
  