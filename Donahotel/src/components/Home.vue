<template>
    <div class="home">
      <div class="imformation">
        <div class="container">
          <span style="font-weight: bold;">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br>
          <span style="font-weight: bold;">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666
        </div>
      </div>
      <div>
        <img src="./picture/Donahotel.jpg" alt="" class="picdonahotel">
      </div>
      <div class="product-container">
        <div class="product">
          <div class="image-container">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
      </div>
      <div class="product-container">
        <div class="product">
          <div class="image-container">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
        <div class="product">
          <div class="image-container">
            <img src="./picture/phongloai1a.jpg" alt="Product Image">
          </div>
          <div class="details">
            Tên sản phẩm
            <button class="btn">Xem chi tiết</button>
          </div>
        </div>
      </div>
      <div class="service" >
      <div class="home-room-img" @mouseover="darkenImage" @mouseout="lightenImage">
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
</style>
  