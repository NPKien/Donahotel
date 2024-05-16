<template >
    <div class="footer-top">
      <table>
        <td ></td>
        <td style="padding-left: 12px; padding-right: 2px;"></td>
        <td></td>
        <td></td>
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
                  <p>Booking</p>
                  <p>Dịch vụ</p>
                  <p>Giới Thiệu</p>
                  <p>Liên Hệ</p>
                  <p>Phòng</p>
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
                  <p>Giới Thiệu</p>
                  <p>Liên Hệ</p>
                  <p>Đặt Phòng</p>
                  <p>PHÒNG VIP 1</p>
                  <p>Dịch Vụ Nhà Hàng</p>
                </div>
              </td>
              <td>
                <div class="col">
                  <p>CHÍNH SÁCH CÔNG TY</p>
                  <p>Hình thức đặt phòng</p>
                  <p>Hình thức thanh toán</p>
                  <p>Bảo mật thông tin khách hàng</p>
                  <p>Hotline liên hệ</p>
                  <p><img src="./picture/phoneicon.png" alt="Phone Icon" class="phone-icon"> 0292 3763 333</p>
                  <br><br>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div class="col" >
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

.footer {
  background-color: #202021;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position:relative;
  left:-100px;
  bottom: 0;
}
.footer-bot {
  background-color: #1a1a1b;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  position:relative;
  left:-100px;
  bottom: 0;
}
.footer-top {
  background-color: #a29060;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position:relative;
  left:-100px;
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
