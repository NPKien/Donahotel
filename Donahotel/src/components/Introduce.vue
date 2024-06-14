<template>
  <div class="hotel-details">
    <img class="back-button" src="./picture/back.png" alt="Back" @click.prevent="scrollToSection('footer')">
    <div class="content">
      <h1>Khách sạn Dona</h1>
      <p>Chào mừng đến với khách sạn Dona, nơi bạn sẽ được trải nghiệm dịch vụ nghỉ dưỡng tuyệt vời nhất.</p>
      <h2>Giới thiệu</h2>
      <p>Khách sạn Dona là khách sạn tiêu chuẩn 2 sao, trực thuộc Công ty cổ phần Dona. Là một trong những khách sạn lớn, hiện đại của Thành phố Cần Thơ nằm ở vị trí thuận lợi trong TTTM Cái Khế, Dona là nơi nghỉ ngơi tuyệt vời cho cả khách du lịch và nghỉ dưỡng.</p>
      <h2>Thông tin liên hệ</h2>
      <p>Số điện thoại: 02923 766 666</p>
      <p>Địa chỉ: Lô B TTTM Cái Khế Đường Trần Phú, Phường Cái Khế, Quận Ninh Kiều, Thành phố Cần Thơ</p>
      <h2>Dịch vụ</h2>
      <ul>
        <li>Dịch vụ nhà hàng</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { scrollMixin } from './mixin/scrollMixin';

export default {
  name: 'HotelDetails',
  mixins: [scrollMixin],
  data() {
    return {
      
    };
  },
  methods: {
    
  },
};
</script>
<style scoped>
.hotel-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
  position: relative;
  top:1cm;
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

p {
  font-size: 18px;
  margin: 5px 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 5px 0;
}
</style>
