<template>
  <div class="edit-typeroom-container">
    <h2>Cập nhật loại phòng</h2>
    <br>
    <div v-if="typeroom">
      <div class="image-container">
        <img :src="getRoomImage(typeroom)" alt="Room Image">
        <input type="file" @change="handleImageChange" accept="image/*">
      </div>
      <form @submit.prevent="updateTyperoom">
        <div class="form-group">
          <label for="name">Tên loại phòng:</label>
          <input type="text" id="name" v-model="typeroom.name" required>
        </div>
        <div class="form-group">
          <label for="newType">Loại:</label>
          <input type="text" id="newType" v-model="newType" required>
        </div>
        <div class="form-group">
          <label for="quantity">Số lượng:</label>
          <input type="number" id="quantity" v-model="typeroom.quantity" required>
        </div>
        <div class="form-group">
          <label for="expense">Chi phí:</label>
          <input type="number" id="expense" v-model="typeroom.expense" required>
        </div>
        <div class="form-group">
          <label for="bed">Giường:</label>
          <input type="text" id="bed" v-model="typeroom.bed" required>
        </div>
        <div class="form-group">
          <label for="area">Diện tích:</label>
          <input type="number" id="area" v-model="typeroom.area" required>
        </div>
        <div class="form-group">
          <label for="internet">Internet:</label>
          <input type="text" id="internet" v-model="typeroom.internet">
        </div>
        <button type="submit" class="btn">Lưu</button>
      </form>
      <div v-if="errorMessage">
        <p style="color: red;">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      typeroom: null,
      newType: '',
      apiUrl: import.meta.env.VITE_API_URL,
      newImage: null,
      errorMessage: '' // Biến để lưu trữ thông báo lỗi
    };
  },
  created() {
    this.fetchTyperoom();
  },
  methods: {
    async fetchTyperoom() {
      try {
        const { type } = this.$route.params;
        const response = await axios.get(`${this.apiUrl}/type/${type}`);
        this.typeroom = response.data;
        this.newType = this.typeroom.type; // Set newType với giá trị ban đầu của type
      } catch (error) {
        console.error('Lấy thông tin loại phòng thất bại:', error);
        alert('Lấy thông tin loại phòng thất bại. Vui lòng thử lại sau.');
      }
    },
    async updateTyperoom() {
      try {
        const { type } = this.$route.params;
        const formData = new FormData();
        for (let key in this.typeroom) {
          formData.append(key, this.typeroom[key]);
        }
        formData.append('newType', this.newType); 
        if (this.newImage) {
          formData.append('picture', this.newImage);
        }
        await axios.put(`${this.apiUrl}/type/update/${type}`, formData);
        alert('Cập nhật loại phòng thành công.');
        this.$router.push({ name: 'QuanLyphong' });
      } catch (error) {
        console.error('Cập nhật loại phòng thất bại:', error);
        this.errorMessage = error.response?.data?.message || 'Cập nhật loại phòng thất bại. Vui lòng thử lại sau.';
      }
    },
    getRoomImage(room) {
      if (room && room.picture && room.picture.data) {
        const blob = new Blob([new Uint8Array(room.picture.data)], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
      }
      return require('./picture/logo.png'); // Sử dụng require cho ảnh mặc định
    },
    handleImageChange(event) {
      this.newImage = event.target.files[0];
      this.errorMessage = ''; // Reset thông báo lỗi khi thay đổi ảnh
    }
  }
};
</script>

<style scoped>
.edit-typeroom-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
  text-align: center;
  margin-bottom: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-group input[type="text"],
.form-group input[type="number"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group input[type="checkbox"] {
  transform: scale(1.5);
}

.btn {
  display: inline-block;
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
