<template>
  <div class="home" v-aos="{ offset: 1000, delay: 300, duration: 1500, easing: 'ease', once: true }">
    <Splide :options="{ perPage: 1, arrows: true, pagination: true }">
      <SplideSlide>
        <div class="image-wrapper">
          <img src="./picture/Donahotel.jpg" alt="" class="picdonahotel">
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="image-wrapper">
          <img src="./picture/Donahotel.jpg" alt="" class="picdonahotel">
        </div>
      </SplideSlide>
    </Splide>
    
    <span class="heading" id="phong">Các loại phòng</span> <br>
    <br>
    <div class="product-container">
      <div class="product" v-for="room in rooms" :key="room._id">
        <div class="image-container" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="200">
          <img :src="getRoomImage(room)" :alt="room.name" @click.prevent="redirectToRoomPage(room.type)">
        </div>
        <div class="details">
          <span style="position: relative;" @click.prevent="redirectToRoomPage(room.type)">{{ room.name }}</span>
          <button class="btn" @click.prevent="redirectToRoomPage(room.type)">Xem chi tiết</button>
        </div>
      </div>
    </div>

    <span class="heading" id="dichvu">Dịch vụ</span><br><br>
    <div class="service">
      <div class="home-room-img" @mouseover="darkenImage" @mouseout="lightenImage" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">
        <span class="room-title">Dịch Vụ Nhà Hàng</span>
        <img width="360" height="250" src="./picture/dichvu.jpg" class="img-responsive">
        <div class="showcase-inner">
          <div>
            <div target="_self"  @click.prevent="redirectTodvnhPage()" class="custom-btn">
              Xem Chi Tiết
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <span class="heading" id="datphong">Liên Hệ Đặt Phòng</span> <br><br>
    <div>
      <form @submit.prevent="submitForm" class="formdatphong" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
        <span class="heading1">Thông Tin Đặt Phòng</span><br>
        <span class="heading2">Ngày đến <br></span>
        <input type="date" v-model="form.ngayden" class="inputf" required><br>
        <span class="heading2">Ngày đi <br></span>
        <input type="date" v-model="form.ngaydi" class="inputf" required><br>
        <span class="heading2">Loại phòng</span><br>
        <div class="dropdown-container">
          <select v-model="form.loaiphong" class="inputf" required>
            <option v-for="option in roomOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div><br>
        <span class="heading2">Số lượng</span><br>
        <div class="dropdown-container">
          <select v-model="form.soluong" class="inputf" required>
            <option v-for="option in quantityOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </div><br>
        <span class="heading1">Thông tin khách hàng</span><br>
        <span class="heading2">Tên của bạn (bắt buộc)</span><br>
        <input type="text" v-model="form.ten" class="inputf" required><br>
        <span class="heading2">Số Điện Thoại (bắt buộc)</span><br>
        <input type="text" v-model="form.sodienthoai" class="inputf" required><br>
        <span class="heading2">Địa chỉ Email</span><br>
        <input type="email" v-model="form.email" class="inputf"><br>
        <span class="heading2">Ghi Chú</span><br>
        <input type="text" v-model="form.ghichu" class="inputf"><br>
        <button type="submit" class="btsent">Gửi đi</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { redirectToPage } from './Loaiphong/redirectToPage';
import { redirectToPageservice } from "./Dichvu/redirectToPageservice";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
  },
  mixins: [redirectToPage, redirectToPageservice],
  data() {
    return {
      rooms: [],
      form: {
        ngayden: '',
        ngaydi: '',
        loaiphong: '',
        soluong: '',
        ten: '',
        sodienthoai: '',
        email: '',
        ghichu: '',
      },
      roomOptions: [],
      quantityOptions: [
        { value: 1, text: 1 },
        { value: 2, text: 2 },
        { value: 3, text: 3 },
        { value: 4, text: 4 },
        { value: 5, text: 5 },
        { value: 6, text: 6 },
      ],
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  created() {
    this.fetchRooms();
  },
  methods: {
    async fetchRooms() {
      try {
        const response = await axios.get(`${this.apiUrl}/type/all`);
        this.rooms = response.data;
        this.roomOptions = this.rooms.map(room => ({ value: room.type, text: room.name }));
      } catch (error) {
        console.error('Lấy tất cả các loại phòng thất bại:', error);
        alert('Lấy tất cả các loại phòng thất bại. Vui lòng thử lại sau.');
      }
    },
    getRoomImage(room) {
      if (room && room.picture && room.picture.data) {
        const blob = new Blob([new Uint8Array(room.picture.data)], { type: 'image/jpeg' });
        return URL.createObjectURL(blob);
      }
      return require('./picture/logo.png'); // Sử dụng require cho ảnh mặc định
    },
    async submitForm() {
      try {
        const response = await axios.post(`${this.apiUrl}/booking`, this.form);
        alert('Đặt phòng thành công');
        this.resetForm();
      } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        if (error.response && error.response.data) {
          alert(`Có lỗi xảy ra: ${error.response.data.message}`);
        } else {
          alert('Có lỗi xảy ra, vui lòng thử lại');
        }
      }
    },
    resetForm() {
      this.form = {
        ngayden: '',
        ngaydi: '',
        loaiphong: '',
        soluong: '',
        ten: '',
        sodienthoai: '',
        email: '',
        ghichu: '',
      };
    },
  },
};
</script>

<style scoped>
/* Your existing styles */
</style>

  
<style scoped>
.home {
  width: 100%;
  color: white;
  box-sizing: border-box;
  z-index: 999;
  display: flex;
  flex-direction: column;
  margin-bottom: 1cm;
  justify-content: center; 
  align-items: center;
  position: relative;
  
}
@media only screen and (min-width: 1025px) {
  .home {
  width: 100%;
  color: white;
  box-sizing: border-box;
  z-index: 999;
  display: flex;
  flex-direction: column;
  margin-bottom: 1cm;
  justify-content: center; 
  align-items: center;
  position: relative;
}
}


.imformation .col {
  padding: 5px;
}


.image-wrapper {
  max-width: 100%; 
  max-height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.picdonahotel {
  max-width: 100%; 
  max-height: 100%; 
  width: auto; 
  height: auto; 
}
@media only screen and (max-width: 600px) {
  .picdonahotel {
  max-width: 100%;
  height: auto;
  margin-top: 100px;
}
}
@media only screen and (max-width: 400px) {
  .picdonahotel {
  max-width: 100%;
  width: 100%;
  height: auto;
  margin-top: 140px;
}
}
.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
}

.product {
  box-sizing: border-box;
  width: calc(33% - 20px); 
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 0; 
  background-color: #fff; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) ;
  transition: transform 0.2s;
  justify-content: center;
}

.product:hover {
  transform: scale(1.05);
}

.image-container {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.image-container img {
  width: 100%;
  height: auto;
  max-width: 100%;
  border-top-left-radius: 10px; 
  border-top-right-radius: 10px; 
}

.details {
  width: 100%;
  text-align: center;
  padding: 10px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.details span {
  color: #333; 
  font-size: 18px;
  margin-bottom: 10px;
}

.details .btn {
  background-color: #007BFF; 
  color: #fff; 
  border: none;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 0px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
}

.details .btn:hover {
  background-color: #0056b3; 
}


@media only screen and (max-width: 768px) {
  .product {
    width: calc(50% - 20px);
  }
}


@media only screen and (max-width: 1024px) {
  .product {
    width: calc(33.33% - 20px);
  }
}


@media only screen and (max-width: 600px) {
  .product {
    width: calc(100% - 20px);
  }
  .image-container img {
    max-width: 90%;
    height: auto;
  }
}
.service {
  display: flex;
  align-items: center;
  justify-content: center; 
  margin-top: 0px;
}

.home-room-img {
  position: relative;
  filter: brightness(100%);
  overflow: hidden;
}

.room-title {
  position: absolute;
  top: 10px; 
  right: 10px; 
  z-index: 500;
  font-size: 18px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 3px;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

.showcase-inner {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.home-room-img:hover .showcase-inner {
  opacity: 1;
}

.custom-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.custom-btn:hover {
  background-color: #0056b3;
}

.home-room-img img {
  transition: transform 0.3s ease;
}

.home-room-img:hover img {
  transform: scale(1.1);
}

.formdatphong {
  padding: 10px; 
  background: #fff;
  box-shadow: 1px 4px 16px 3px rgba(199, 197, 199, 1);
  max-width: 90%; 
  margin: auto; 
}

@media only screen and (min-width: 600px) {
  .formdatphong {
    width: 400px; 
  }
}


.heading {
  display: flex;
  justify-content: center;
  font-size: 30px;
  color: #000000;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 0px; 
  
}

.heading1 {
  font-size: 18px;
  color: #2F353E;
  font-weight: 500;
}

.heading2 {
  font-size: 18px;
  color: #2F353E;
}

.inputf {
  width: 100%;
  height: 40px; /* Điều chỉnh chiều cao của input */
  margin-bottom: 10px; /* Tăng khoảng cách dưới mỗi input */
}

.btsent {
  padding: 10px 20px;
  background: #a29060;
  color: #fff;
  border: none;
  font-size: 20px;
  margin-top: 20px;
  display: block; /* Đảm bảo nút gửi chiếm đầy chiều ngang của form */
  margin: 0 auto; /* Canh giữa nút */
}

.btn {
  margin-top: 10px; /* Tăng khoảng cách trên mỗi nút */
}
</style>
