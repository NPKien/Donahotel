<template>
  <header class="header">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="row w-100 align-items-center no-gutters">
          <div class="col-lg-1"></div>
          <div class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-start">
            <a href="http://localhost:5173/">
              <img class="logo" src="./picture/logo.png" alt="Logo">
            </a>
          </div>
          <div class="col-4 col-lg d-flex justify-content-center">
            <a class="nav-link" href="http://localhost:5173/">Trang chủ</a>
          </div>
          <div class="col-4 col-lg d-flex justify-content-center">
            <a class="nav-link" @click.prevent="scrollToSection('section1')">Phòng</a>
          </div>
          <div class="col-4 col-lg d-flex justify-content-center">
            <a class="nav-link" @click.prevent="scrollToSection('section2')">Đặt phòng</a>
          </div>
          <div class="col-4 col-lg d-flex justify-content-center">
            <a class="nav-link" @click.prevent="scrollToSection('section3')">Khuyến mãi</a>
          </div>
          <div class="col-4 col-lg d-flex justify-content-center">
            <a class="nav-link" @click.prevent="scrollToSection('section4')">Dịch vụ</a>
          </div>
          <div class="col-4 col-lg d-flex justify-content-center">
            <a class="nav-link" @click.prevent="scrollToSection('section5')">Liên hệ</a>
          </div>
          <div class="col-lg-2" ></div>
        </div>
      </div>
    </nav>
    <img style="width: 60px; position: fixed; bottom: 0cm; right: 0cm; z-index: 100;" src="./picture/iconup.png" alt="" @click="scrollToTop" class="scroll-to-top" :class="{ show: isVisible }">
    <div class="guide-plugin">
      <div class="guide-icon" @click.prevent="toggleGuide">
        <img src="./picture/help.png" alt="Guide Icon" style="height: 1cm;">
      </div>
      <div v-if="showGuide">
        <div class="guide-form">
          <div class="qa-box" v-for="qa in qaList" :key="qa.question">
            <div class="question">{{ qa.question }}</div>
            <div class="answer">{{ qa.answer }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="floating-contacts">
      <div class="contact-item" @click="openEmailComposer">
        <img src="./picture/gmail.png" alt="Gmail Icon">
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
      isVisible: false,
      showGuide: false,
      qaList: [
        { question: "Làm thế nào để đặt phòng?", answer: "Bạn có thể đặt phòng bằng cách truy cập vào trang web của chúng tôi và chọn mục 'Đặt phòng'." },
        { question: "Có cần phải đặt cọc khi đặt phòng không?", answer: "Có, để đảm bảo việc đặt phòng của bạn, chúng tôi yêu cầu một khoản đặt cọc. Khoản cọc này sẽ được hoàn trả sau khi bạn thanh toán đầy đủ tiền phòng." },
        { question: "Giá phòng tại khách sạn áp dụng theo phòng hay theo số lượng người?", answer: "Các mức giá được áp dụng cho hai người/phòng và người thứ ba sẽ được tính phí thêm 200.000 VND với giường phụ." },
        { question: "Làm thế nào để đặt phòng cho người khác tại khách sạn?", answer: "Quý khách chỉ cần cung cấp tên của khách nhận phòng khách sạn và số điện thoại, địa chỉ email của khách để Khách sạn liên hệ, Khách sạn sẽ gửi xác nhận qua email, số điện thoại mà Quý khách cung cấp." },
        { question: "Khách sạn có sẵn mạng Internet hay không ?", answer: "Toàn bộ khách sạn được thiết lập hệ thống internet không dây được sử dụng hoàn toàn miễn phí. Quý khách có thể liên hệ với quầy lễ tân để biết tên đăng nhập và mật khẩu. Mạng không dây cũng đều có sẵn ở mỗi phòng khách." },
        { question: "Khách sạn có khu vui chơi cho trẻ em hay không ?", answer: "Chúng tôi hiện chưa có khu vui chơi cho trẻ em. Tuy nhiên ngay cạnh Khách sạn của chúng tôi là khu vui chơi cho trẻ em." },
        { question: "Làm cách nào tôi có thể hủy phòng mà không bị tính phí ?", answer: "Tuỳ thuộc vào các điều kiện khi đặt phòng, quý khách nên vui lòng liên hệ với bộ phận đặt phòng của chúng tôi để biết thêm thông tin chi tiết." }
      ]
    };
  },
  methods: {
    toggleGuide() {
      this.showGuide = !this.showGuide;
    },
    openEmailComposer() {
      window.open('https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kienB1805882@student.ctu.edu.vn');
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #000000;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 0 20px;
  box-sizing: border-box;
}

.logo {
  width: 260px;
  height: auto;
}

.navbar .nav-link {
  color: white;
  text-decoration: none;
  padding: 15px;
}

.floating-contacts {
  position: fixed;
  bottom: 11%;
  right: 10px;
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
  bottom: 20%; 
  right: 5px;
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
  max-height: 300px;
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
</style>
