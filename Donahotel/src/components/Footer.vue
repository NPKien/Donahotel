<template>
  <div>
    <div class="footer-top">
      <table style="width: 100%;height: 100%;">
        <tr>
          <td style="border-right-width: 1px; border-right-style: solid; border-right-color: rgb(134, 121, 89);"></td>
          <td style="width: 20%;border-right-width: 1px; border-right-style: solid; border-right-color: rgb(134, 121, 89);"></td>
          <td style="width: 20%;border-right-width: 1px; border-right-style: solid; border-right-color: rgb(134, 121, 89);"></td>
          <td width="35%"></td>
        </tr>
      </table>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row">
          <table>
            <tr>
              <td>
                <div class="col">
                  <p>Chuyên mục</p>
                  <p @click.prevent="scrollToSection('section2')">Booking</p>
                  <p @click.prevent="scrollToSection('section4')">Dịch vụ</p>
                  <p @click.prevent="redirectToIntroductionPage">Giới Thiệu</p>
                  <p @click.prevent="scrollToSection('section5')" >Liên Hệ</p>
                  <p @click.prevent="scrollToSection('section1')">Phòng</p>
                </div>
              </td>
              <td>
                <div class="col">
                  <p>Phản hồi gần đây</p>
                </div>
              </td>
              <td>
                <div class="col">
                  <p>Bài viết mới</p>
                  <p @click.prevent="redirectToIntroductionPage">Giới Thiệu</p>
                  <p @click.prevent="scrollToSection('section5')">Liên Hệ</p>
                  <p @click.prevent="scrollToSection('section2')">Đặt Phòng</p>
                  <p>PHÒNG VIP 1</p>
                  <p @click.prevent="scrollToSection('section4')">Dịch Vụ Nhà Hàng</p>
                </div>
              </td>
              <td>
                <div class="col">
                  <p>CHÍNH SÁCH CÔNG TY</p>
                  <p @click.prevent="scrollToSection('section2')">Hình thức đặt phòng</p>
                  <p @click.prevent="scrollToSection('section5')">Hình thức thanh toán</p>
                  <p>Bảo mật thông tin khách hàng</p>
                  <p @click.prevent="scrollToSection('section5')">Hotline liên hệ</p>
                  <p><img src="./picture/phoneicon.png" alt="Phone Icon" class="phone-icon"> 0292 3763 333</p>
                  <br><br>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="col">
                  <p>HỆ THỐNG KHÁCH SẠN</p>
                  <p>Khách sạn độc quyền duy nhất</p>
                  <p>Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP. Cần Thơ, Việt Nam</p>
                </div>
              </td>
              <td>
                <div class="col">
                  <p>Chấp nhận thanh toán:</p>
                  <p><img src="./picture/thanhtoan.png" alt="Payment Icons" class="payment-icon"></p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </footer>
    <div class="footer-bot">
      <br><br>
    </div>
  </div>
</template>

<script>
import { scrollMixin } from './mixin/scrollMixin';

export default {
  name: 'Footer',
  mixins: [scrollMixin],
  data() {
    return {
      isVisible: false
    };
  }, methods: {
    redirectToIntroductionPage() {
      const url = `http://localhost:5173/introduce`;
        window.location.href = url;
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #202021;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  left: -100px;
  bottom: 0;
}
.footer-bot {
  background-color: #1a1a1b;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  left: -100px;
  bottom: 0;
}
.footer-top {
  background-color: #a29060;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  left: -100px;
  bottom: 0;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin-left: 2cm;
}

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 2cm;
  margin-bottom: 2cm;
}

.col {
  flex: 1;
  width: 20vw;
}

p {
  color: white;
  font-size: 17px;
  margin-bottom: 10px;
}

.connectButton {
  color: white;
  text-decoration: none;
}

.connectButton:hover {
  text-decoration: underline;
}

.payment-icon {
  width: 250px;
  height: auto;
}
.phone-icon {
  width: 40px;
  height: auto;
}
td {
  vertical-align: top;
}
</style>
