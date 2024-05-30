<template>
  <header class="header">
    <nav class="nav-wrapper">
      <a href="http://localhost:5173/"><img class="logo" src="./picture/logo.png" alt="Logo"></a>
      <button><a href="http://localhost:5173/">Trang chủ</a></button>
      <a class="nav-link" @click.prevent="scrollToSection('section1')">Phòng</a>
      <a class="nav-link" @click.prevent="scrollToSection('section2')">Đặt phòng</a>
      <a class="nav-link" @click.prevent="scrollToSection('section3')">Khuyến mãi</a>
      <a class="nav-link" @click.prevent="scrollToSection('section4')">Dịch vụ</a>
      <a class="nav-link" @click.prevent="scrollToSection('section5')">Liên hệ</a>
    </nav>
        <img style="width: 60px; position: fixed; bottom: 0cm; right: 0cm; z-index: 100;" src="./picture/iconup.png" alt="" @click="scrollToTop" class="scroll-to-top" :class="{ show: isVisible }">
        <div class="guide-plugin">
          <div class="guide-icon" @click.prevent="toggleGuide">
            <img src="./picture/help.png" alt="Guide Icon" style="height: 1cm;">
          </div>
          <div v-if="showGuide" >
            <div class="guide-form">
              <div class="qa-box">
                <div class="question">Làm thế nào để đặt phòng?</div>
                <div class="answer">Bạn có thể đặt phòng bằng cách truy cập vào trang web của chúng tôi và chọn mục 'Đặt phòng'.</div>
              </div>
              <div class="qa-box">
                <div class="question">Có cần phải đặt cọc khi đặt phòng không?</div>
                <div class="answer">Có, để đảm bảo việc đặt phòng của bạn, chúng tôi yêu cầu một khoản đặt cọc. Khoản cọc này sẽ được hoàn trả sau khi bạn thanh toán đầy đủ tiền phòng.</div>
              </div>
              <div class="qa-box">
                <div class="question">Giá phòng tại khách sạn áp dụng theo phòng hay theo số lượng người?</div>
                <div class="answer">Các mức giá được áp dụng cho hai người/phòng và người thứ ba sẽ được tính phí thêm 200.000 VND với giường phụ.</div>
              </div>
              <div class="qa-box">
                <div class="question"> Làm thế nào để đặt phòng cho người khác tại khách sạn?</div>
                <div class="answer">Quý khách chỉ cần cung cấp tên của khách nhận phòng khách sạn và số điện thoại, địa chỉ email của khách để Khách sạn liên hệ, Khách sạn sẽ gửi xác nhận qua email, số điện thoại mà Quý khách cung cấp.</div>
              </div>
              <div class="qa-box">
                <div class="question">Khách sạn có sẵn mạng Internet hay không ?</div>
                <div class="answer">Toàn bộ khách sạn được thiết lập hệ thống internet không dây được sử dụng hoàn toàn miễn phí. Quý khách có thể liên hệ với quầy lễ tân để biết tên đăng nhập và mật khẩu. Mạng không dây cũng đều có sẵn ở mỗi phòng khách.</div>
              </div>
              <div class="qa-box">
                <div class="question">Khách sạn có khu vui chơi cho trẻ em hay không ?</div>
                <div class="answer">Chúng tôi hiện chưa có khu vui chơi cho trẻ em. Tuy nhiên ngay cạnh Khách sạn của chúng tôi là khu vui chơi cho trẻ em.</div>
              </div>
              <div class="qa-box">
                <div class="question">Làm cách nào tôi có thể hủy phòng mà không bị tính phí ?</div>
                <div class="answer">Tuỳ thuộc vào các điều kiện khi đặt phòng, quý khách nên vui lòng liên hệ với bộ phận đặt phòng của chúng tôi để biết thêm thông tin chi tiết.</div>
              </div>

            </div>
          </div>
        </div>
  </header>
</template>

<script>
import { scrollMixin } from './mixin/scrollMixin';

export default {
  name: 'Header',
  mixins: [scrollMixin],
  data() {
    return {
      isVisible: false, showGuide: false
    };
  },
  methods:{
    toggleGuide() {
      this.showGuide = !this.showGuide;
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #000000;
  color: white;
  width: 100vw;
  height: 90px;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
}

.nav-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.logo {
  width: 260px;
  height: auto;
  margin-left: 2cm;
  position: relative;
  top: 0.5cm;
}

button {
  background-color: yellowgreen;
  border: none;
  height: 90px;
  width: 90px;
}

a {
  color: white;
  text-decoration: none;
  line-height: 90px;
}

button a {
  line-height: 90px;
}

.nav-link {
  width: 90px;
  text-align: center;
}

.floating-contacts {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;
}

.contact-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-item img:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
.guide-plugin {
  position: fixed;
  bottom:20%; 
  right: 0;
  z-index: 800;
}
.guide-icon {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.guide-form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  max-height: 300px; /* Đặt chiều cao tối đa */
  overflow-y: auto; 
}

.qa-box {
  margin-bottom: 20px;
}

.question {
  font-weight: bold;
  color: #333;
}

.answer {
  color: #555;
}
.guide-box.show {
  display: block;
}
</style>
