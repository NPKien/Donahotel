<template>

  <div class="restaurant-details">
    <img class="back-button" src="../picture/back.png" alt="Back" @click.prevent="scrollToSection('dichvu')">
    <img src="../picture/dichvu.jpg" alt="Restaurant Image" class="restaurant-image">
    <div class="content">
      <h1>Nhà hàng khách sạn</h1>
      <p>Chào mừng đến với nhà hàng của chúng tôi, nơi bạn sẽ được trải nghiệm ẩm thực tuyệt vời nhất.</p>
      <h2>Menu</h2>
      <ul>
        <li><strong>Phở bò:</strong> 100.000 VND</li>
      <li v-for="food in foods" :key="food._id">
        <strong>{{ food?.namefood }}:</strong> {{ food?.response }} VND

      </li>
    </ul>
      <h2>Dịch vụ đặc biệt</h2>
      <p>Chúng tôi cung cấp dịch vụ tổ chức tiệc, sự kiện với không gian sang trọng và đội ngũ phục vụ chuyên nghiệp.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { scrollMixin } from "../mixin/scrollMixin";
export default {
  name: 'RestaurantDetails',
  mixins: [scrollMixin],
  data(){
    return {
      foods: [],
      apiUrl: import.meta.env.VITE_API_URL,
    };
  },
  async mounted() {
    try {
      const response = await axios.get(`${this.apiUrl}/food/all`);
      this.foods = response.data;
    } catch (error) {
      console.error('Lấy danh sách món ăn thất bại:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại');
    }
  }
};
</script>

<style scoped>
.restaurant-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: Arial, sans-serif;
  margin: 20px;
  position: relative;
}
.back-button {
  width: 2cm;
  position: absolute;
  top: 2cm;
  left: 0cm;
  cursor: pointer;
}
@media (max-width: 920px) {
  .back-button {
    width: 2cm;
    position: absolute;
    top: 2cm;
    left: 0.7cm;
    cursor: pointer;
  }
}

@media (max-width: 830px) {
  .back-button {
    width: 2cm;
    position: absolute;
    top: 2cm;
    left: -0.5cm;
    cursor: pointer;
  }
}
@media (max-width: 740px) {
  .back-button {
    width: 1cm;
    position: absolute;
    top: 1.3cm;
    left: -0.7cm;
    cursor: pointer;
  }
}
.restaurant-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 2cm;
}

.content {
  max-width: 800px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 36px;
  margin-bottom: 10px;
}

h2 {
  color: #666;
  font-size: 28px;
  margin: 20px 0 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  font-size: 18px;
  margin: 5px 0;
}

strong {
  color: #333;
}
</style>
