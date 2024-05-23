<template>
    <div class="address-info">
      <div class="container">
        <span class="label">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br>
        <span class="label">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666
      </div>
    </div>
    <br>
    <img style="width: 2cm; position: relative; top: 2cm;" src="../picture/back.png" alt="" @click.prevent="scrollToSection('section5')"> <br>
    <div class="room-info" >
      <h3 class="section-title" >Chính sách công ty</h3>
      <table>
        <tr>
          <td>
            <h2 class="detail-title">Thời gian nhận và trả phòng</h2>
          </td>
          <td>
            <span class="detail-text">Nhận phòng: </span>
            <span class="detail-title">Sau 14:00</span><br>
            <span class="detail-text">Trả phòng: </span>
            <span class="detail-title">Trước 12:00</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2 class="detail-title">Bữa sáng</h2>
          </td>
          <td>
            <span class="detail-title">Loại: </span>
            <span class="detail-text">Tây phương</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2 class="detail-title">Thú cưng</h2>
          </td>
          <td>
            <span class="detail-text">Không được phép mang theo thú cưng</span>
          </td>
        </tr>
        <tr>
          <td>
            <h2 class="detail-title">Thanh toán tại khách sạn</h2>
          </td>
          <td>
            <span class="detail-text"><img src="../picture/thanhtoan.png" alt=""></span>
          </td>
        </tr>
      </table>
      <div>test</div>
    </div>
  </template>
  
  <script>
  import {scrollMixin} from "../mixin/scrollMixin";
  export default {
    mixins: [scrollMixin],
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
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    margin-right: 10cm;
    color: yellowgreen;
    display: flex;
    justify-content: center;
  }
  
  .detail-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #0f4a1a;
  }
  
  .detail-text {
    font-size: 20px;
    margin-bottom: 15px;
    color: #0f4a1a;
  }
  td{
    vertical-align: top;
    margin-top: 2cm;
    margin-left: 10cm;
    margin-right: 5cm;
  }
  table{
    width: 100vw;
  }
  td{
    width: 30%;
  }
  tr{
    height: 2cm;
  }
  </style>
  