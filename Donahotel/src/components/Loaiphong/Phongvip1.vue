<template>
  <div class="room-details">
    <img class="back-button" src="../picture/back.png" alt="Back" @click.prevent="scrollToSection('phong')">
    <img src="../picture/phongvip1.jpg" alt="Room Image" class="room-image">
    <div class="content">
      <h1>Loại phòng khách sạn</h1>
      <p>Khám phá các loại phòng đa dạng của chúng tôi, phù hợp với mọi nhu cầu của bạn.</p>
      <h2>Phòng Vip 1</h2>
      <ul>
        <li>
          <strong>Giường:</strong> {{ roomType?.bed }}
        </li>
        <li>
          <strong>Diện tích:</strong> {{ roomType?.area }} m²
        </li>
        <li>
          <strong>Internet:</strong> {{ roomType?.internet }}
        </li>
        <li>
          <strong>Số phòng còn lại:</strong> {{ roomType?.quantity }}
        </li>
        <li>
          <strong>Giá:</strong> {{ roomType?.expense }} VND
        </li>
      </ul>
      <h2>Dịch vụ đặc biệt</h2>
      <p>Chúng tôi cung cấp dịch vụ phòng với các tiện nghi hiện đại và dịch vụ chu đáo, đảm bảo sự hài lòng của bạn.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { scrollMixin } from "../mixin/scrollMixin";

export default {
  name: 'Phongloai1a',
  mixins: [scrollMixin],
  data() {
    return {
      roomType: null,
      isMobile: window.innerWidth < 768
    };
  },
  mounted() {
    this.fetchRoomType();
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    async fetchRoomType() {
      try {
        const response = await axios.get(`http://localhost:3000/type/vip1`);
        this.roomType = response.data;
      } catch (error) {
        console.error('Lấy thông tin phòng thất bại:', error);
        alert('Có lỗi xảy ra, vui lòng thử lại');
      }
    },
  }
};
</script>

<style scoped>
.room-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
  position: relative;
}

.back-button {
  width: 2cm;
  position: absolute;
  top: 2cm;
  left: 0cm;
  cursor: pointer;
}

@media (max-width: 920px) {
  .back-button {
    width: 2cm;
    position: absolute;
    top: 2cm;
    left: -1cm;
    cursor: pointer;
  }
}

@media (max-width: 830px) {
  .back-button {
    width: 2cm;
    position: absolute;
    top: 2cm;
    left: -2cm;
    cursor: pointer;
  }
}

@media (max-width: 830px) {
  .back-button {
    width: 1.5cm;
    position: absolute;
    top: 2cm;
    left: -2cm;
    cursor: pointer;
  }
}

.room-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 2cm;
}

.content {
  max-width: 800px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 36px;
  margin-bottom: 10px;
}

h2 {
  color: #666;
  font-size: 28px;
  margin: 20px 0 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>
