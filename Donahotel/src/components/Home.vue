<template>
 <div class="home">
    <div class="imformation">
        <div class="container"> <span style="font-weight: bold;">Địa Chỉ :</span> Lô B, TTTM Cái Khế, Trần Phú, Ninh Kiều, TP.Cần Thơ. <br> <span style="font-weight: bold;">SĐT Đặt Chỗ :</span> 0292 376 3333 - 3 766 333 - 376 6666</div>
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
                <span>Tên sản phẩm</span>
                <button class="btn">Xem chi tiết</button>
            </div>
        </div>
        <div class="product">
            <div class="image-container">
                <img src="./picture/phongloai1a.jpg" alt="Product Image">
            </div>
            <div class="details">
                <span>Tên sản phẩm</span>
                <button class="btn">Xem chi tiết</button>
            </div>
        </div>
        <div class="product">
            <div class="image-container">
                <img src="./picture/phongloai1a.jpg" alt="Product Image">
            </div>
            <div class="details">
                <span>Tên sản phẩm</span>
                <button class="btn">Xem chi tiết</button>
            </div>
        </div>
    </div>
    
 </div>
 </template>
  
<script>
  export default {
    name: 'Home'
  }
</script>
  
<style scoped>
    .home{
        width: 100vw;
        position: relative;
        left: -100px;
    }
    .imformation{
        height: 2cm;
        line-height: 0.7cm;
        background-color: yellowgreen;
    }
    .container{
        position: relative;
        top: 0.4cm;
        margin-left: 2.5cm;
        margin-bottom: 1cm ;
    }
    .picdonahotel{
        width: 100%;
        height: auto;
    }
    .product-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .product {
        width: calc(33.33% - 50px);
        margin: 10px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ccc;
        padding: 20px;
    }
    .image-container {
        width: 100%;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

        .image-container img {
        width: 100%; /* Sử dụng calc để tính toán chiều rộng của ảnh với khoảng cách 10px từ mỗi phía */
        height: auto;
        margin: 0 10px; /* Đặt margin 10px từ mỗi phía của ảnh */
    }

    .details {
        margin-top: 20px;
        text-align: center;
    }
</style>
  