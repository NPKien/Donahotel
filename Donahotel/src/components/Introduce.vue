<template>
  <div class="imformation home">
      <div class="container">
        <span style="font-weight: bold;">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br>
        <span style="font-weight: bold;">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666
      </div>
  </div>
  <br>
  <div class="info-container">
    <img style="margin-top: 1cm; width: 2cm;" src="./picture/back.png" alt="" @click.prevent="scrollToSection('section1')"> <br>
    <h2 class="hotel-title">Khách sạn Dona</h2>
    <p class="hotel-address">Lô B TTTM Cái Khế Đường Trần Phú, Phường Cái Khế, Quận Ninh Kiều, Thành phố Cần Thơ</p>
    <h3 class="section-title">Giới thiệu</h3>
    <p class="intro-text">Khách sạn Dona là khách sạn tiêu chuẩn 2 sao, trực thuộc Công ty cổ phần Dona. Là một trong những khách sạn lớn, hiện đại của Thành phố Cần Thơ nằm ở vị trí thuận lợi trong TTTM Cái Khế, Dona là nơi nghỉ ngơi tuyệt vời cho cả khách du lịch và nghỉ dưỡng.</p>
    <h3 class="section-title">Thông tin liên hệ</h3>
    <p class="contact-info">Số điện thoại: 02923 766 666</p>
    <p class="contact-info">Địa chỉ: Lô B TTTM Cái Khế Đường Trần Phú, Phường Cái Khế, Quận Ninh Kiều, Thành phố Cần Thơ</p>
    <h3 class="section-title">Dịch vụ</h3>
    <ul class="services-list">
      <li class="service-item">Dịch vụ nhà hàng</li>
    </ul>
  </div>
</template>

<script>
import { scrollMixin } from "./mixin/scrollMixin";
export default {
  mixins: [scrollMixin],
};
</script>

<style scoped>
.home {
  width: 100vw;
  position: relative;
  left: -100px;
  top: 2cm;
}

.imformation {
  height: 2cm;
  line-height: 0.7cm;
  background-color: yellowgreen;
}

.container {
  position: relative;
  top: 0.4cm;
  margin-left: 2.5cm;
  margin-bottom: 1cm;
}

.info-container {
  margin-top: 1cm;
  font-family: Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

.hotel-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #0f4a1a;
}

.hotel-address, .contact-info {
  font-size: 16px;
  margin-bottom: 15px;
}

.section-title {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: yellowgreen;
}

.intro-text {
  font-size: 20px;
  margin-bottom: 15px;
  color: #0f4a1a;
}

.services-list {
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
}

.service-item {
  font-size: 20px;
  margin-bottom: 5px;
  color: #0f4a1a;
}
</style>
