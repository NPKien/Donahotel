<template>
    <div>
      <div class="heading">Thông tin đặt phòng</div>
      <br><br>
      <div v-for="booking in bookings" :key="booking._id" class="booking-item">
        <div class="booking-info">
          <p><strong>Ngày đến:</strong> {{ booking.ngayden }}</p>
          <p><strong>Ngày đi:</strong> {{ booking.ngaydi }}</p>
          <p><strong>Loại phòng:</strong> {{ booking.loaiphong }}</p>
          <p><strong>Số lượng:</strong> {{ booking.soluong }}</p>
          <p><strong>Tên:</strong> {{ booking.ten }}</p>
          <p><strong>Số điện thoại:</strong> {{ booking.sodienthoai }}</p>
          <p><strong>Email:</strong> {{ booking.email }}</p>
          <p><strong>Ghi chú:</strong> {{ booking.ghichu }}</p>
          <button @click="deleteBooking(booking._id)" class="delete-button">Xóa</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bookings: [],
        apiUrl: import.meta.env.VITE_API_URL,
      };
    },
    created() {
      this.fetchBookings();
    },
    methods: {
      async fetchBookings() {
        try {
          const response = await axios.get(`${this.apiUrl}/booking`);
          this.bookings = response.data;
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      },
      async deleteBooking(id) {
        try {
          await axios.delete(`${this.apiUrl}/booking/${id}`);

          this.bookings = this.bookings.filter(booking => booking._id !== id);
        } catch (error) {
          console.error('Error deleting booking:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .booking-item {
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
  .booking-info {
    flex: 1;
  }
  
  .delete-button {
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 3px;
  }
  
  .delete-button:hover {
    background-color: #d32f2f;
  }
  </style>
  