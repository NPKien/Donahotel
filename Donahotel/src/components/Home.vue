<template>
  <div class="home" v-aos="{ offset: 1000, delay: 300, duration: 1500, easing: 'ease', once: true }">
      <div class="imformation">
        <div class="container">
          <span style="font-weight: bold;">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br>
          <span style="font-weight: bold;">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666
        </div>
      </div>
      <div>
        <img src="./picture/Donahotel.jpg" alt="" class="picdonahotel">
      </div>
      <span class="heading">Các loại phòng</span>
      <div class="product-container" >
        <div class="product">
          <div class="image-container" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="200">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="200">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true" data-aos-offset="200">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
      </div>
      <div class="product-container"  >
        <div class="product">
          <div class="image-container" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container" data-aos="fade-right" data-aos-anchor-placement="top-bottom" data-aos-once="true">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
      </div>
      <span class="heading">Dịch vụ</span>
      <div class="service" >
      <div class="home-room-img" @mouseover="darkenImage" @mouseout="lightenImage" data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-once="true">
        <span class="room-title">Dịch Vụ Nhà Hàng</span>
        <img width="360" height="250" src="./picture/dichvu.jpg" class="img-responsive">
        <div class="showcase-inner">
          <div>
            <a target="_self" href="//donahotel.vn/dich-vu-nha-hang/" class="custom-btn">
              Xem Chi Tiết
            </a>
          </div>
        </div>
    </div>
  </div>  
  <span class="heading">Liên Hệ Đặt Phòng</span>
  <div>
    <form class="formdatphong" action="" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-once="true">
      <span class="heading1">Thông Tin Đặt Phòng</span><br>
      <span class="heading2">Ngày đến <br></span>
      <input type="date" name="ngayden" id="ngayden" class="inputf" >
      <span class="heading2">Ngày đi <br></span>
      <input type="date" name="ngayden" id="ngayden" class="inputf" ><br>
      <span class="heading2">Loại phòng</span><br>
      <div class="dropdown-container">
          <select id="room-type" v-model="selectedRoomType">
            <option v-for="option in roomOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
      </div><br>
      <span class="heading2">Số lượng</span><br>
      <div class="dropdown-container">
          <select id="room-type" v-model="quantity">
            <option v-for="option in quantityOptions" :key="option.value" :value="option.value">
              {{ option.text }}
            </option>
          </select>
      </div>
      <br>
      <span class="heading1">Thông tin khách hàng</span><br>
      <span class="heading2">Tên của bạn (bắt buộc)</span><br>
      <input type="text" class="inputf"><br>
      <span class="heading2">Số Điện Thoại (bắt buộc)</span><br>
      <input type="text" class="inputf"><br>
      <span class="heading2">Địa chỉ Email</span><br>
      <input type="text" class="inputf"><br>
      <span class="heading2">Ghi Chú</span><br>
      <input type="text" class="inputf"><br>
      <button class="btsent">Gửi đi</button>
    </form>
  </div>
  </div>
</template>
  
  
<script>
  export default {
    name: 'Home',
    methods: {
        darkenImage() {
            document.querySelector('.home-room-img img').style.filter = 'brightness(50%)';
            document.querySelector('.room-title').style.backgroundColor = '#007bff';
        },
        lightenImage() {
            document.querySelector('.home-room-img img').style.filter = 'brightness(100%)';
            document.querySelector('.room-title').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        },
    }, 
    data() {
        return {
         selectedRoomType: '',
         roomOptions: [
          { value: 'vip1', text: 'Phòng VIP 1' },
          { value: 'vip2', text: 'Phòng VIP 2' },
          { value: 'type1', text: 'Phòng loại 1' },
          { value: 'type2', text: 'Phòng loại 2' },
          { value: 'type2_other', text: 'Phòng loại 2(khác)' }
        ],
        quantity: '',
        quantityOptions: [
          { value: '1', text: 1 },
          { value: '2', text: 2 },
          { value: '3', text: 3 },
          { value: '4', text: 4 },
          { value: '5', text: 5 },
          { value: '6', text: 6 }
        ]
      };
    }
  }

</script>
  
<style scoped>
.home {
  width: 100vw;
  position: relative;
  left: -100px;
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

.picdonahotel {
  width: 100%;
  height: auto;
}

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}

.product {
  width: calc(33.33% - 90px);
  margin: 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px; 
  margin-left: 1.5cm;
}

.image-container {
  width: 111%;
  text-align: center;
  margin-top: -18px;
  margin-bottom: 0px;
  margin-left: -0px;
}

.image-container img {
  width: 100%; 
  height: auto;
  margin: 0 0px;
}

.details {
  margin-top: 20px;
  text-align: center;
}

.service {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 2.4cm;
}

.home-room-img {
  position: relative;
  filter: brightness(100%);
  overflow: hidden;
}

.room-title {
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 500;
  font-size: 18px;
  color: #ffffff;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 3px;
}

.img-responsive {
  width: 100%;
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
  position: absolute;
  left: 3cm;
  bottom: 2cm;
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
.formdatphong{
  padding: 30px;
  background: #fff;
  box-shadow: 1px 4px 16px 3px rgba(199, 197, 199, 1);
  width: 40%;
  position: relative;left: 30%;
}
.heading{
  font-size: 30px;
  color: #000000;
  position: relative;
  left:40%;
  font-weight: 300;
}
.heading1{
  font-size: 18px;
  color: #2F353E;
  font-weight:500;
}
.heading2{
  font-size: 18px;
  color: #2F353E;
}
.inputf{
  width: 100%;
  height: 1.2cm;
}
.btsent{
  padding: 10px 20px;
  background: #a29060;
  color: #fff;
  border: none;
  font-size: 20px;
  margin-top: 20px;
}
</style>
  