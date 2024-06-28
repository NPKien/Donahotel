<template>
  <div class="rooms-container">
    <span class="heading">Quản lý phòng</span>
    <br><br>
    <div class="room-cards-container">
      <div v-for="room in rooms" :key="room._id" class="room-card">
        <div class="image-container">
          <img :src="getRoomImage(room)" alt="Room Image">
        </div>
        <div class="details">
          <span>{{ room.name }}</span>
          <div class="actions">
            <button class="btn delete-btn" @click="deleteRoom(room.type)">Xóa</button>
            <button class="btn edit-btn" @click="editRoom(room.type)">Sửa</button>
          </div>
        </div>
      </div>
    </div>
    <button class="btn add-btn" @click="navigateToAddRoom">Thêm</button>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      rooms: [],
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  created() {
    this.fetchAllRooms();
  },
  methods: {
    async fetchAllRooms() {
      try {
        const response = await axios.get(`${this.apiUrl}/type/all/`);
        this.rooms = response.data;
      } catch (error) {
        console.error('Lấy thông tin phòng thất bại:', error);
        alert('Lấy thông tin phòng thất bại. Vui lòng thử lại sau.');
      }
    },
    getRoomImage(room) {
      if (room && room.picture && room.picture.data) {
        const blob = new Blob([new Uint8Array(room.picture.data)], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
      }
      return require('./picture/logo.png'); // Sử dụng require cho ảnh mặc định
    },
    editRoom(type) {
      const idadmin = this.$route.params.idadmin;
      this.$router.push({ name: 'EditTyperoom', params: { idadmin, type } });
    },
    async deleteRoom(type) {
      const result = await Swal.fire({
        title: 'Bạn có chắc chắn muốn xóa?',
        text: "Hành động này không thể hoàn tác!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Có, xóa nó!',
        cancelButtonText: 'Hủy bỏ'
      });

      if (result.isConfirmed) {
        try {
          await axios.delete(`${this.apiUrl}/type/delete/${type}`);
          this.fetchAllRooms();
          Swal.fire('Đã xóa!', 'Loại phòng đã được xóa.', 'success');
        } catch (error) {
          console.error('Xóa loại phòng thất bại:', error);
          Swal.fire('Lỗi!', 'Xóa loại phòng thất bại. Vui lòng thử lại sau.', 'error');
        }
      }
    },
    navigateToAddRoom() {
      const idadmin = this.$route.params.idadmin;
      this.$router.push({ name: 'AddTyperoom', params: { idadmin } });
    },
  }
};
</script>

<style scoped>
.rooms-container {
  width: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1cm;
}

.heading {
  font-size: 30px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px;
}

.room-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
}

.room-card {
  width: calc(33% - 20px);
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  justify-content: center;
}

.room-card:hover {
  transform: scale(1.05);
}

.image-container {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.image-container img {
  width: 100%;
  height: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.details {
  width: 100%;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.details span {
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.details .btn {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.details .delete-btn {
  background-color: #FF0000;
}

.details .delete-btn:hover {
  background-color: #CC0000;
}

.details .edit-btn {
  background-color: #FFA500;
}

.details .edit-btn:hover {
  background-color: #CC8400;
}

.btn.add-btn {
  margin-top: 20px;
  background-color: #28a745;
}

.btn.add-btn:hover {
  background-color: #218838;
}

@media only screen and (max-width: 768px) {
  .room-card {
    width: calc(50% - 20px);
  }
}

@media only screen and (max-width: 1024px) {
  .room-card {
    width: calc(33.33% - 20px);
  }
}

@media only screen and (max-width: 600px) {
  .room-card {
    width: calc(100% - 20px);
  }
}
</style>
