<template>
    <div>
      <div class="heading">Địa chỉ nhận thư</div>
      <br><br>
      <div v-if="editMode">
        <input v-model="gmail" placeholder="Địa chỉ email" class="edit-input" />
        <button @click="toggleEdit" class="save-button">Lưu</button>
      </div>
      <div v-else>
        <span class="email-display">{{ gmail }}</span>
        <button @click="toggleEdit" class="edit-button">Sửa</button>
      </div>
      <div class="heading">Tài khoản</div>
      <div v-if="user">
        <p><strong>Tên người dùng:</strong> {{ user.user }}</p>
        <p><strong>Vai trò:</strong> {{ user.role }}</p>
      </div>
      <div class="heading">Quản lý tài khoản</div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Tên người dùng</th>
              <th>Vai trò</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="account in accounts" :key="account._id">
              <td>{{ account.user }}</td>
              <td>{{ account.role }}</td>
              <td>
                <button @click="deleteAccount(account._id)" class="delete-button">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="new-account">
          <input v-model="newAccount.user" placeholder="Tên người dùng" />
          <input v-model="newAccount.password" type="password" placeholder="Mật khẩu" />
          <button @click="addAccount" class="add-button">Thêm tài khoản</button>
        </div>
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
        apiUrl: import.meta.env.VITE_API_URL,
        user: null,
        accounts: [],
        newAccount: {
          user: '',
          password: '',
        },
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
        if (this.editMode) {
          this.saveGmail();
        } else {
          this.editMode = true;
        }
      },
      async fetchUser() {
        try {
          const response = await axios.get(`${this.apiUrl}/user/me`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          this.user = response.data;
        } catch (error) {
          console.error('Lấy thông tin người dùng thất bại:', error);
        }
      },
      async fetchAccounts() {
        try {
          const response = await axios.get(`${this.apiUrl}/user`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          this.accounts = response.data;
        } catch (error) {
          console.error('Lấy danh sách tài khoản thất bại:', error);
        }
      },
      async addAccount() {
        try {
          const response = await axios.post(`${this.apiUrl}/user`, this.newAccount, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          this.accounts.push(response.data);
          this.newAccount = { user: '', password: '' };
        } catch (error) {
          console.error('Thêm tài khoản thất bại:', error);
        }
      },
      async deleteAccount(id) {
        try {
          await axios.delete(`${this.apiUrl}/user/${id}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          });
          this.accounts = this.accounts.filter(account => account._id !== id);
        } catch (error) {
          console.error('Xóa tài khoản thất bại:', error);
        }
      }
    },
    mounted() {
      this.fetchGmail();
      this.fetchUser();
      this.fetchAccounts();
    }
  };
  </script>
  
  <style scoped>
  .heading {
    font-size: 30px;
    color: #000000;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 0px;
  }
  .edit-input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .email-display {
    font-size: 20px;
    margin-right: 20px;
  }
  .edit-button, .save-button, .delete-button, .add-button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
  }
  .edit-button:hover, .save-button:hover, .delete-button:hover, .add-button:hover {
    background-color: #0056b3;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  .new-account {
    margin-top: 20px;
  }
  .new-account input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin-right: 10px;
  }
  .new-account button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 3px;
  }
  .new-account button:hover {
    background-color: #218838;
  }
  </style>
  