<template>
  <div class="policy-details">
    <img class="back-button" src="../picture/back.png" alt="Back" @click.prevent="scrollToSection('footer')">
    <div class="room-info">
      <h2 class="section-title">Chính sách công ty</h2>
      <table>
        <tr>
          <td>
            <h3 class="detail-title">Thời gian nhận và trả phòng</h3>
          </td>
          <td>
            <span class="detail-text">Nhận phòng: </span>
            <span class="detail-value">Sau 14:00</span><br>
            <span class="detail-text">Trả phòng: </span>
            <span class="detail-value">Trước 12:00</span>
          </td>
        </tr>
        <tr>
          <td>
            <h3 class="detail-title">Bữa sáng</h3>
          </td>
          <td>
            <span class="detail-text">Loại: </span>
            <span class="detail-value">Tây phương</span>
          </td>
        </tr>
        <tr>
          <td>
            <h3 class="detail-title">Thú cưng</h3>
          </td>
          <td>
            <span class="detail-text">Không được phép mang theo thú cưng</span>
          </td>
        </tr>
        <tr>
          <td>
            <h3 class="detail-title">Thanh toán tại khách sạn</h3>
          </td>
          <td>
            <span class="detail-text"><img src="../picture/thanhtoan.png" alt="Payment Methods" class="picthanhtoan"></span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
import { scrollMixin } from '../mixin/scrollMixin';

export default {
  name: 'PolicyDetails',
  mixins: [scrollMixin],
};
</script>
<style scoped>
.policy-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
  position: relative;
  top: 1cm;
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
    left: 0.7cm;
    cursor: pointer;
  }
}

@media (max-width: 830px) {
  .back-button {
    width: 2cm;
    position: absolute;
    top: 2cm;
    left: -0.5cm;
    cursor: pointer;
  }
}
@media (max-width: 740px) {
  .back-button {
    width: 1cm;
    position: absolute;
    top: 1.3cm;
    left: 1cm;
    cursor: pointer;
  }
}

.room-info {
  max-width: 800px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #666;
  font-size: 28px;
  margin: 20px 0 10px;
}

.detail-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.detail-text {
  color: #0f4a1a;
  font-size: 18px;
}

.detail-value {
  color: #333;
  font-size: 18px;
}

table {
  width: 100%;
  border-spacing: 0 1cm;
}

td {
  vertical-align: top;
}
@media (max-width: 650px) {
  .back-button {
    width: 1cm;
    position: absolute;
    top: 1.3cm;
    left: 1cm;
    cursor: pointer;
  }
  .detail-title {
  color: #333;
  font-size: 16px;
  margin-bottom: 10px;
}
.detail-text {
  color: #0f4a1a;
  font-size: 13px;
}

.detail-value {
  color: #333;
  font-size: 13px;
}
}
@media (max-width: 580px) {
  .back-button {
    width: 1cm;
    position: absolute;
    top: 1.3cm;
    left: -0.5cm;
    cursor: pointer;
  }
  .detail-title {
  color: #333;
  font-size: 13px;
  margin-bottom: 10px;
}
.detail-text {
  color: #0f4a1a;
  font-size: 10px;
}

.detail-value {
  color: #333;
  font-size: 10px;
}
.picthanhtoan{
  width: 4cm;
}
}
</style>
