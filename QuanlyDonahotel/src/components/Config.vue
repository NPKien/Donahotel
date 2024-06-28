<template>
  <div class="container">
    <div class="heading">Địa chỉ nhận thư</div>
    <br /><br />
    <div v-if="editMode" class="input-group">
      <input v-model="gmail" placeholder="Địa chỉ email" class="edit-input" />
      <button @click="saveGmail" class="save-button">Lưu</button>
    </div>
    <div v-else class="input-group">
      <span class="email-display">{{ gmail }}</span>
      <button @click="toggleEdit" class="edit-button">Sửa</button>
    </div>

    <div class="new-user">
      <div class="heading">Đăng ký tài khoản mới</div>
      <div class="input-group">
        <label for="username">Tên người dùng:</label>
        <input v-model="username" id="username" type="text" placeholder="Nhập tên người dùng" class="edit-input" />
      </div>
      <div class="input-group">
        <label for="password">Mật khẩu:</label>
        <input v-model="password" id="password" type="password" placeholder="Nhập mật khẩu" class="edit-input" />
      </div>
      <div class="input-group">
        <button @click="registerUser" class="add-button">Đăng ký</button>
      </div>
      <div v-if="message">{{ message }}</div>
    </div>

    <div v-if="users.length > 0">
      <div class="heading">Danh sách người dùng</div>
      <ul class="user-list">
        <li v-for="user in users" :key="user._id" class="user-item">
          <span class="user-name">{{ user.user }}</span>
          <button @click="deleteUser(user._id)" class="delete-button">Xóa</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      gmail: '',
      editMode: false,
      username: '',
      password: '',
      role: 1,
      apiUrl: import.meta.env.VITE_API_URL,
      message: '',
      users: [], // Mảng lưu danh sách người dùng có vai trò = 1
    };
  },
  methods: {
    async fetchGmail() {
      try {
        const response = await axios.get(`${this.apiUrl}/gmail`);
        this.gmail = response.data.gmail;
      } catch (error) {
        console.error('Lấy địa chỉ email thất bại:', error);
      }
    },
    async saveGmail() {
      try {
        await axios.put(`${this.apiUrl}/gmail/`, { gmail: this.gmail });
        this.editMode = false;
      } catch (error) {
        console.error('Cập nhật địa chỉ email thất bại:', error);
      }
    },
    toggleEdit() {
      this.editMode = !this.editMode;
      if (!this.editMode) {
        this.saveGmail();
      }
    },
    async registerUser() {
      try {
        const response = await axios.post(`${this.apiUrl}/user/register`, {
          user: this.username,
          password: this.password,
        });
        this.message = response.data.message;
        this.username = '';
        this.password = '';
        this.role = 1;
        this.fetchUsersWithRole1();
      } catch (error) {
        console.error('Đăng ký tài khoản thất bại:', error);
        this.message = 'Đăng ký tài khoản thất bại';
      }
    },
    async fetchUsersWithRole1() {
      try {
        const response = await axios.get(`${this.apiUrl}/user/role/1`);
        this.users = response.data;
      } catch (error) {
        console.error('Lấy danh sách người dùng thất bại:', error);
      }
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`${this.apiUrl}/user/${userId}`);
        this.fetchUsersWithRole1();
      } catch (error) {
        console.error('Xóa người dùng thất bại:', error);
      }
    },
  },
  mounted() {
    this.fetchGmail();
    this.fetchUsersWithRole1();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.heading {
  font-size: 30px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.edit-input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 5px;
}

.email-display {
  font-size: 20px;
  margin-right: 20px;
}

.edit-button,
.save-button,
.delete-button,
.add-button {
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
}

.edit-button:hover,
.save-button:hover,
.delete-button:hover,
.add-button:hover {
  background-color: #0056b3;
}

.new-user {
  margin-top: 20px;
}

.user-list {
  list-style-type: none;
  padding: 0;
}

.user-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-name {
  font-weight: bold;
}
</style>
