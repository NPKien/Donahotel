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
    <footer class="footer" id="footer">
      <div class="container">
        <div class="row">
          <table>
            <tr>
              <td>
                <div class="col">
                  <p>Chuyên mục</p>
                  <p @click.prevent="scrollToSection('datphong')">Booking</p>
                  <p @click.prevent="scrollToSection('dichvu')">Dịch vụ</p>
                  <p @click.prevent="redirectToIntroductionPage">Giới Thiệu</p>
                  <p @click.prevent="scrollToSection('footer')" >Liên Hệ</p>
                  <p @click.prevent="scrollToSection('phong')">Phòng</p>
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
                  <p @click.prevent="scrollToSection('footer')">Liên Hệ</p>
                  <p @click.prevent="scrollToSection('datphong')">Đặt Phòng</p>
                  <p @click.prevent="redirectTodvnhPage">Dịch Vụ Nhà Hàng</p>
                </div>
              </td>
              <td>
                <div class="col">
                  <p @click.prevent="redirectTochinhsachPage">CHÍNH SÁCH CÔNG TY</p>
                  <p @click.prevent="scrollToSection('datphong')">Hình thức đặt phòng</p>
                  <p @click.prevent="scrollToSection('footer')">Hình thức thanh toán</p>
                  <p>Bảo mật thông tin khách hàng</p>
                  <p @click.prevent="scrollToSection('footer')">Hotline liên hệ</p>
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
      <div class="footer-section">
        <h3>Fanpage</h3>
        <div class="fb-page" data-href="https://www.facebook.com/donahotelcantho/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/donahotelcantho/" class="fb-xfbml-parse-ignore">
            <a  href="https://www.facebook.com/donahotelcantho/"><img src="./picture/fbicon.png" alt="" style="height: 0.5cm; margin-top: 0.2cm;"></a></blockquote>
          </div>
    </div>
    <div class="footer-section">
        <h3>Địa chỉ</h3>
        <p>Lô 8, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP. Cần Thơ</p>
        <p>SĐT Đặt Chỗ: 0292 376 3333 - 3 766 333 - 376 6666</p>
    </div>
    </div>
  </div>
</template>

<script>
import { scrollMixin } from './mixin/scrollMixin';
import { redirectToPage } from "./Loaiphong/redirectToPage";
import { redirectToPageservice } from "./Dichvu/redirectToPageservice";
import { redirectToPagechinhsach } from "./chinhsach/redirectToPage";
export default {
  name: 'Footer',
  mixins: [scrollMixin, redirectToPage, redirectToPageservice, redirectToPagechinhsach],
  data() {
    return {
      isVisible: false
    };
  }, methods: {
    redirectToIntroductionPage() {
      this.$router.push('/introduce');
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
  bottom: 0;
}
.footer-bot {
  background-color: #1a1a1b;
  width: 100vw;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  color: white;
}
.footer-top {
  background-color: #a29060;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  bottom: 0;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin-left: 2cm;
}
.footer-section {
    flex: 1;
    margin: 10px;
    margin-left: 2cm;
    height: 90px;
}

.footer-section h3 {
    border-bottom: 1px solid white;
    padding-bottom: 10px;
}

.footer-section p {
    margin: 10px 0;
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

@media only screen and (max-width: 768px) {
  p {
    font-size: 14px; 
  }
  .col {
  flex: 1;
  width: 18vw;
  }
  .footer-section {
    flex: 1;
    margin: 10px;
    margin-left: 2cm;
    height: 150px;
}
}
@media only screen and (max-width: 1000px) {

  .footer-section {
    flex: 1;
    margin: 10px;
    margin-left: 2cm;
    height: 150px;
}
}
@media only screen and (max-width: 480px) {
  p {
    font-size: 12px;
  }
  .col {
  flex: 1;
  width: 15vw;
  }
  .footer-section {
    flex: 1;
    margin: 10px;
    margin-left: 0.5cm;
    height: 150px;
}
.payment-icon {
  width: 150px;
  height: auto;
}
}

</style>
