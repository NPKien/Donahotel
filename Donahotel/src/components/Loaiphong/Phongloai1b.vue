<template>
  <div class="address-info">
    <div class="container">
      <span class="label">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br>
      <span class="label">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666
    </div>
  </div>
  <br>
  <img style="width: 2cm; position: relative; top: 2cm;" src="../picture/back.png" alt="" @click.prevent="scrollToSection('section1')"> <br>
  <div class="room-info" >
    <h3 class="section-title" >Phòng loại 1b</h3>
    <table>
      <tr>
        <td>
          <h2 class="detail-title">2 Giường đôi</h2>
        </td>
        <td>
          <h2 class="detail-title">Diện tích</h2>
          <span class="detail-text">20m²</span>
        </td>
        <td>
          <h2 class="detail-title">Internet</h2>
          <p class="detail-text">Internet (thu phụ phí)</p>
          <p class="detail-text">Internet có dây trong phòng.</p>
        </td>
      </tr>
      <tr>
        <td>
          <h2 class="detail-title">Số phòng còn lại: </h2>
        </td>
        <td>
          <span class="detail-text">{{ roomQuantity }}</span>
        </td>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          <h2 class="detail-title">Giá: </h2>
        </td>
        <td>
          <span class="detail-text">Ghi ở đây</span>
        </td>
        <td>
        </td>
      </tr>
    </table>
    <div>test</div>
  </div>
</template>

<script>
import { scrollMixin } from "../mixin/scrollMixin";
import axios from "axios"; // Thêm import axios vào đây

export default {
  name: 'Phongloai1a',
  mixins: [scrollMixin],
  inheritAttrs: false,
  data() { // Khởi tạo roomQuantity trong data
    return {
      roomQuantity: null
    };
  },
  mounted() {
    this.fetchRoomQuantity();
  },
  methods: {
    async fetchRoomQuantity() {
      try {
        const response = await axios.get(`http://localhost:3000/quantity/type1b`);
        this.roomQuantity = response.data.quantity;
      } catch (error) {
        console.error('Có lỗi xảy ra khi lấy số lượng phòng:', error);
        alert('Có lỗi xảy ra, vui lòng thử lại');
      }
    }
  }
};
</script>

<style scoped>
.address-info {
  width: 100vw;
  height: 2.5cm;
  background-color: yellowgreen;
  padding: 1cm 2.5cm;
  position: relative;
  left: -100px;
  top: 2cm;
}

.container {
  margin-top: -0.2cm;
}

.label {
  font-weight: bold;
}

.room-info {
  margin-top: 1cm;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.section-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 10cm;
  color: yellowgreen;
  display: flex;
  justify-content: center;
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
td {
  vertical-align: top;
  margin-top: 2cm;
  margin-left: 10cm;
  margin-right: 5cm;
}
table {
  width: 100vw;
}
td {
  width: 30%;
}
</style>
