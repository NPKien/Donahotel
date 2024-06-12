<template>
  <div class="room-details">
    <img class="back-button" src="../picture/back.png" alt="Back" @click.prevent="scrollToSection('phong')">
    <div class="room-info">
      <h3 class="section-title">Phòng loại 2b</h3>
      <table>
        <tr>
          <td>
            <h2 class="detail-title">{{ roomType?.bed}}</h2>
          </td>
          <td>
            <h2 class="detail-title">Diện tích</h2>
            <span class="detail-text">{{ roomType?.area }}m²</span>
          </td>
          <td>
            <h2 class="detail-title">Internet</h2>
            <p class="detail-text">{{ roomType?.internet }}</p>
          </td>
        </tr>
        <tr>
          <td>
            <h2 class="detail-title">Số phòng còn lại: </h2>
          </td>
          <td>
            <span class="detail-text">{{ roomType?.quantity }}</span>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <h2 class="detail-title">Giá: </h2>
          </td>
          <td>
            <span class="detail-text">{{ roomType?.expense }}</span>
          </td>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { scrollMixin } from "../mixin/scrollMixin";
import axios from "axios";

export default {
  name: 'Phongloai2b',
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
        const response = await axios.get(`http://localhost:3000/type/type2b`);
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
}

.back-button {
  width: 2cm;
  margin: 2cm auto 1cm;
  margin-left: 0cm;
  cursor: pointer;
}

.room-info {
  margin-top: 0cm;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.section-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: yellowgreen;
}

.detail-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0f4a1a;
}

.detail-text {
  font-size: 20px;
  margin-bottom: 15px;
  color: #0f4a1a;
}

table {
  width: 100%;
}

td {
  padding: 10px;
  vertical-align: top;
}

</style>
