<template>
  <div class="edit-typeroom-container">
    <h2>Thêm mới loại phòng</h2>
    <br>
    <div v-if="typeroom">
      <div class="image-container">
        <img :src="getRoomImage(typeroom)" alt="Room Image">
        <input type="file" @change="handleImageChange" accept="image/*">
      </div>
      <form @submit.prevent="addTyperoom">
        <div class="form-group">
          <label for="name">Tên loại phòng:</label>
          <input type="text" id="name" v-model="typeroom.name" required>
        </div>
        <div class="form-group">
          <label for="type">Loại:</label>
          <input type="text" id="type" v-model="typeroom.type" required>
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
        <button type="submit" class="btn">Thêm mới</button>
      </form>
      <div v-if="!newImage && submitted">
        <p style="color: red;">Vui lòng chọn ảnh cho loại phòng!</p>
      </div>
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
    typeroom: {
      name: '',
      type: '',
      quantity: 0,
      expense: 0,
      bed: '',
      area: 0,
      internet: '',
      picture: null
    },
    apiUrl: import.meta.env.VITE_API_URL,
    newImage: null,
    submitted: false,
    errorMessage: ''
  };
},
methods: {
  async addTyperoom() {
    if (!this.newImage) {
      this.submitted = true; 
      return; 
    }
    try {
      const formData = new FormData();
      for (let key in this.typeroom) {
        formData.append(key, this.typeroom[key]);
      }
      if (this.newImage) {
        formData.append('picture', this.newImage);
      }
      await axios.post(`${this.apiUrl}/type/add/`, formData);
      alert('Thêm loại phòng mới thành công.');
      this.$router.push({ name: 'QuanLyphong' });
    } catch (error) {
      console.error('Lỗi thêm loại phòng mới:', error);
      this.errorMessage = error.response?.data?.message || 'Thêm loại phòng mới thất bại. Vui lòng thử lại sau.';
    }
  },
  getRoomImage(room) {
    if (room.picture) {
      return `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(room.picture.data)))}`;
    }
    return './default-room.jpg'; 
  },
  handleImageChange(event) {
    this.newImage = event.target.files[0];
    this.errorMessage = '';
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
